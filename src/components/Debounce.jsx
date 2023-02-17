import { useState } from "react";
import { useDebounce } from "react-use";

const Debounce = () => {

    const [mensaje, setMensaje] = useState('');
    const [final, setFinal] = useState('');

    useDebounce(() => {
        console.log('DEBOUNCE!!');
        setFinal(mensaje);
    }, 2000, [mensaje]);

    return (
        <div>
            <p>{mensaje}</p>
            <p>{final}</p>
            <input type="text" onChange={(e) => setMensaje(e.target.value)} />
        </div>
    )
}

export default Debounce;