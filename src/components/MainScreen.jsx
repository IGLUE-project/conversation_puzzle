import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import Exit from "./Exit.jsx";
import './../assets/scss/main.scss';

const MainScreen = (props) => {
  const { escapp, appSettings, Utils, I18n } = useContext(GlobalContext);
  const [currentSolution, setCurrentSolution] = useState([]);
  const [processingSolution, setProcessingSolution] = useState(false);
  const [light, setLight] = useState("off");
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerMarginTop, setContainerMarginTop] = useState(0);
  const [containerMarginLeft, setContainerMarginLeft] = useState(0);
 


  useEffect(() => {
    handleResize();
  }, [props.appWidth, props.appHeight]);

  function handleResize(){
    if((props.appHeight === 0)||(props.appWidth === 0)){
      return;
    }

    let aspectRatio = 4 / 3;
    let _keypadWidth = Math.min(props.appHeight * aspectRatio, props.appWidth);
    let _keypadHeight = _keypadWidth / aspectRatio;

    let _containerWidth = _keypadWidth * 1
    let _containerHeight = _keypadHeight * 1
    let _containerMarginLeft;
    let _containerMarginTop;

 
    switch(appSettings.skin){
      case "RETRO":
      case "RETRO_JUNGLE":
      case "RETRO_REALISTIC":
        _containerMarginTop = _keypadHeight * 0.12;
        _containerMarginLeft = 0;
         
        break;
      case "FUTURISTIC":
        _containerMarginTop = 0;
        _containerMarginLeft = _keypadWidth * 0;
      
        break;
      default:
        //Standard skin
        _containerMarginTop = 0;
        _containerMarginLeft = _keypadWidth * 0;
       
    }

    setContainerWidth(_containerWidth);
    setContainerHeight(_containerHeight);
    setContainerMarginTop(_containerMarginTop);
    setContainerMarginLeft(_containerMarginLeft);

  }
  const {currentQuestion, handleAnswerClick, passed, onExit, submitPuzzleSolution, reset} = props;
  let backgroundImage = '';
  if (currentQuestion && currentQuestion.image) {
    backgroundImage += 'url("' + currentQuestion.image + '")';
  } else  if(appSettings.background && appSettings.background !== "NONE"){
    backgroundImage += 'url("' + appSettings.background + '")';
  }

 
  return (
    <div id="screen_main" className={"screen_content"} style={{ backgroundImage: backgroundImage }}>
      <div id="keypad" style={{ width: containerWidth, height: "auto", marginTop: containerMarginTop, marginLeft: containerMarginLeft }}>
        <div className="questions">
          <h1>{currentQuestion.next && currentQuestion.next.text ? currentQuestion.next.text : currentQuestion.text}</h1>
          <ul>
            {currentQuestion.answers?.map((answer, index) => (
              <li key={index} onClick={() => handleAnswerClick(answer, index)}>
                {answer.text}
              </li>
            ))}
          </ul>
          <div>{passed === false ? <Exit onExit={reset} text={"Reset"}/>:""}</div>
          <div>{passed === true ? <Exit onExit={submitPuzzleSolution} text={"Continue"}/>:""}</div>
        </div>
      </div>
    </div>);
};

export default MainScreen;



