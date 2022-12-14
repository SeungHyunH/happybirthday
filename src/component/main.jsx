import React,{useState,useEffect,useRef} from 'react'
import styled, {keyframes} from 'styled-components'

const Main = () => {
  const [letterHidden,setLetterHidden] = useState(true);
  const letter = useRef();
  const [letterText,setLetterText] = useState('');

  useEffect(()=>{
    fetch('letter.txt')
    .then((r)=>r.text())
    .then(text=>setLetterText(text));
  },[]);

  useEffect(()=>{
    if(letterHidden){
      setTimeout(()=>letter.current.style.display = 'none',250);
    }else{
      setTimeout(()=>letter.current.style.display = 'block',0);
    }
  },[letterHidden])
  return (
    <Wrap>
      <Cake src='birthday_cake.png' onClick={()=>setLetterHidden(false)}></Cake>
      <LetterWrap ref={letter} isHidden = {letterHidden}>
        <Close src='close.svg' onClick={()=>setLetterHidden(true)}/>
        <Letter>{letterText}</Letter>
        <img src='profile.jpg' width='100%' alt=''/>
      </LetterWrap>
    </Wrap>
  )
}

const Letter = styled.div`
  background-color: #F8F7F3;
  padding : 10%;
  padding-bottom: 0;
  width: 80%;
  height: auto;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 3rem;
  font-size: 2rem;
  text-decoration: underline;
  text-underline-position: under;
  font-family: "godoMaum";
`

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F8F7F3;
  background-image: url('/birthday_bg.jpg');
  background-repeat : no-repeat;
  background-position: center;
  background-size : 100vw;
`

const Cake = styled.img`
  width: 50%;
  padding-left: 25%;
  margin-top: 60vh;
  :active{
    filter: brightness(50%);
  }
`

const LetterShow = keyframes`
  from{
    transform: translateY(100vh);
  }
  to{
    transform: translateY(0);
  }
`;

const LetterHide= keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(100vh);
  }
`;


const LetterWrap = styled.div`
  position : absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #F8F7F3;
  display: none;
  animation-duration: 0.25s;
  animation-timing-function: ${(props)=>props.isHidden ? 'ease-in' : 'ease-out'};
  animation-name: ${(props)=>props.isHidden ? LetterHide : LetterShow};
  animation-fill-mode: forwards;

`

const Close = styled.img`
  width: 10%;
  position: absolute;
  top: 0;
  left: 90%;
`

export default Main