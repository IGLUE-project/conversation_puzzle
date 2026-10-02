import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import Exit from "./Exit.jsx";
import './../assets/scss/main.scss';

const MainScreen = (props) => {
  const { escapp, appSettings, Utils, I18n } = useContext(GlobalContext);

  useEffect(() => {
    handleResize();
  }, [props.appWidth, props.appHeight]);

  function handleResize(){
    if((props.appHeight === 0)||(props.appWidth === 0)){
      return;
    }
  }

  const {currentQuestion, handleAnswerClick, showContinue, showReset, onClickContinue, onClickReset} = props;
  let backgroundImage = '';
  if (currentQuestion && currentQuestion.image) {
    backgroundImage += 'url("' + currentQuestion.image + '")';
  } else  if(appSettings.background && appSettings.background !== "NONE"){
    backgroundImage += 'url("' + appSettings.background + '")';
  }

  return (
    <div id="screen_main" className={"screen_content"} style={{ backgroundImage: backgroundImage }}>
      <div id="conversation">
        <div className="questions">
          <h1>{currentQuestion.next && currentQuestion.next.text ? currentQuestion.next.text : currentQuestion.text}</h1>
          <ul>
            {currentQuestion.answers?.map((answer, index) => (
              <li key={index} onClick={() => handleAnswerClick(answer, index)}>
                {answer.text}
              </li>
            ))}
          </ul>
          <div>{props.showReset ? <button className="exit" onClick={onClickReset}>{I18n.getTrans("i.reset")}</button> :""}</div>
          <div>{props.showContinue ? <button className="exit" onClick={onClickContinue}>{I18n.getTrans("i.continue")}</button>:""}</div>
        </div>
      </div>
      <audio id="audio_failure" src={appSettings.soundNok} autostart="false" preload="auto" />
      <audio id="audio_success" src={appSettings.soundOk} autostart="false" preload="auto" />
    </div>);
};

export default MainScreen;