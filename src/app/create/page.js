// "use client"
"use client"
import FetchAudio from "./FetchAudio";
import { useState } from "react";
import "../style.css";
import Header from "../components/Header";
import SelectModelID from "./SelectModelId";


const Page = () => {
    const [text, setText] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [remainingChars, setRemainingChars] = useState(2500); // Set your desired max characters
    const [selectedModel, setSelectedModel] = useState("eleven_multilingual_v2");
    const [voiceId, setVoiceId] = useState("5Q0t7uMcjvnagumLfvZi");

    const handleAudioUrlChange = (url) => {
        setAudioUrl(url);
    };

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        const currentChars = newText.length;
        const charsRemaining = 2500 - currentChars;
        setRemainingChars(charsRemaining);
    };

    const handleModelChange = (selectedValue) => {
        setSelectedModel(selectedValue);
        // You can perform additional actions here if needed
    };

    const handleVoiceChange = (selectedVoiceId) => {
        setVoiceId(selectedVoiceId);
        // console.log(voiceId);
    }

    return (
        <main className="create-main">
            <Header />
            <div className="create-main-container">
                <h2 className="create-title">Create your own "Echo"</h2>
                <div className="text-div">
                    <div>
                        <SelectModelID handleModelidChange={handleModelChange} handleVoiceidChange={handleVoiceChange} />
                        {/* <p>Selected Model: {selectedModel}</p> */}
                    </div>
                    <label htmlFor="textInput">Enter Text:</label>
                    <textarea
                        type="text"
                        id="textInput"
                        className="input-box"
                        value={text}
                        onChange={handleTextChange}
                        maxLength={2500} // Set your desired max characters
                    />
                    <div className="create-char">
                        <p>Characters remaining: {remainingChars}</p>
                        <div className="create-fetch-button"><FetchAudio text={text} model_Id={selectedModel} voice_Id={voiceId} onAudioUrlChange={handleAudioUrlChange} /></div>
                    </div>
                </div>
                {audioUrl && <audio src={audioUrl} autoPlay controls></audio>}
            </div>
        </main>
    );
};

export default Page;