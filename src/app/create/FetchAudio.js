// components/FetchAudio.js
import "../style.css"

const FetchAudio = ({ text, onAudioUrlChange }) => {
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
      }),
    };

    fetch('https://api.elevenlabs.io/v1/text-to-speech/FMtBvNSn9leA2q5xl68W', options)
      .then((response) => response.arrayBuffer())
      .then((audioBuffer) => {
        const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(audioBlob);
        onAudioUrlChange(url);
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
