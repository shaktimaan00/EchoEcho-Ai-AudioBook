import React from 'react';
import "../style.css"

const SelectModelID = ({ handleModelidChange, handleVoiceidChange }) => {
  const handleModelSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleModelidChange(selectedValue);
  };

  const handleVoiceSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleVoiceidChange(selectedValue);
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <select className='select-button' onChange={handleModelSelectChange} label={"Select Model Id"}>
        <option className='select-value' value="eleven_multilingual_v2" defaultValue>Select Model id</option>
        <option className='select-value' value="eleven_multilingual_v2">Eleven Multilingual v2</option>
        <option className='select-value' value="eleven_multilingual_v1">Eleven Multilingual v1</option>
        {/* <option className='select-value' value="eleven_monolingual_v1">Eleven English v1</option>
        <option className='select-value' value="eleven_english_sts_v2">Eleven English v2</option> */}
        <option className='select-value' value="eleven_turbo_v2">Eleven Turbo v2</option>
      </select>
      <select className='select-button' onChange={handleVoiceSelectChange} label={"Select Model Id"}>
        <option className='select-value' value="29vD33N1CtxCmqQRPOHJ" defaultValue={1}>Select Voice id</option>
        <option className='select-value' value="21m00Tcm4TlvDq8ikWAM">Rachel</option>
        <option className='select-value' value="2EiwWnXFnvU5JabPnv8n">Clyde</option>
        <option className='select-value' value="5Q0t7uMcjvnagumLfvZi">Paul</option>
        <option className='select-value' value="AZnzlk1XvdvUeBnXmlld">Domi</option>
        <option className='select-value' value="CYw3kZ02Hs0563khs1Fj">Dave</option>
        <option className='select-value' value="D38z5RcWu1voky8WS1ja">Fin</option>
        <option className='select-value' value="EXAVITQu4vr4xnSDxMaL">Sarah</option>
        <option className='select-value' value="ErXwobaYiN019PkySvjV">Antoni</option>
        <option className='select-value' value="GBv7mTt0atIp3Br8iCZE">Thomas</option>
        <option className='select-value' value="IKne3meq5aSn9XLyUdCD">Charlie</option>
        <option className='select-value' value="zrHiDhphv9ZnVXBqCLjz">Mimi</option>
        <option className='select-value' value="z9fAnlkpzviPz146aGWa">Glinda</option>
        <option className='select-value' value="piTKgcLEGmPE4e6mEKli">Nicole</option>
        <option className='select-value' value="pMsXgVXv3BLzUgSXRplE">Serena</option>
        <option className='select-value' value="pFZP5JQG7iQjIQuC4Bku">Lily</option>
        <option className='select-value' value="oWAxZDx7w5VEj9dCyTzz">Grace</option>
      </select>
    </div>
  );
};

export default SelectModelID;
