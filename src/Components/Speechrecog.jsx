import React, { useState } from 'react'
import './Speechrecog.css'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'

export const Speechrecog = () => {

    const [textCopied, setTocopy] = useState(); 
    const [isCopied,setCopied] = useClipboard(textCopied);
    const listening = () => SpeechRecognition.startListening({continous: true, language: 'en-IN'});
    const {transcript, browserSupportsSpeechRecognition } =useSpeechRecognition();

    if (!browserSupportsSpeechRecognition){
        return null
    }


  return (
   <>
    <div className="navigation">
        <ul>
            <a href="/">HOME</a>
            <a href="/">ABOUT SPEECH RECOG</a>
            <a href="/">FAQS</a>
        </ul>

       <div className="box">
       <label>SEACRH ANYTHING</label>
        <input type="text" placeholder='SEARCH HERE'></input>
       </div>


        <h1>SPEECH-TO-TEXT</h1>
        <p>ITS CONVERT SPEECH TO TEXT</p>
       <div className="main-content" onClick={() =>{setTocopy(transcript)}}>
        {transcript}
       </div>

       <div className="btn">
        <button onClick={setCopied}>
            {isCopied ? 'Copied' : 'copy to clipboard'}
        </button>
        <button onClick={listening}>START LISTENING</button>
        <button onclick={SpeechRecognition.stopListening}>STOP LISTENING</button>
       </div>
    </div>
   </>
  )
}
