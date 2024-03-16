// components/FetchAudio.js
import "../style.css"

const FetchAudio = ({ text, onAudioUrlChange, model_Id, voice_Id }) => {
    const apiKey = process.env.NEXT_PUBLIC_XI_API_KEY;
  const fetchAudio = () => {
    const options = {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice_settings: { similarity_boost: 0.75, stability: 0.5 },
        text: text,
        model_id: model_Id
      }),
    };

    fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_Id}`, options)
    .then((response) => response.arrayBuffer())
    .then((audioBuffer) => {
    const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(audioBlob);
    onAudioUrlChange(url);
    console.log(voice_Id, model_Id);
    })
    .catch((err) => console.error(err));
  };

  return (
    <div>
      <button className="fetch-button" onClick={fetchAudio}>Generate Speech</button>
    </div>
  );
};

export default FetchAudio;
