import { useAudio } from "react-use";

const Audio = () => {

    const [audio, state, controls] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
        autoPlay: false
    });

    return (
        <div>
            {audio}
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={controls.pause}>Pause</button>
            <button onClick={controls.play}>Play</button>
        </div>
    );

}

export default Audio;