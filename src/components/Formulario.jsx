import { useEffect, useRef, useState } from "react";

const Formulario = () => {

    const [mensaje, setMensaje] = useState('');
    const renderCount = useRef(-1);
    const prevMensaje = useRef('');

    const inputRef = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    return (
        <div>
            <p>Render Count: {renderCount.current}</p>
            <input type="text" onChange={e => setMensaje(e.target.value)} />
            <p>MENSAJE: {mensaje}</p>
            <p>PREV: {prevMensaje.current}</p>
            <input type="text" ref={inputRef} />
            <button onClick={() => {
                inputRef.current.focus();
            }}>PULSA para FOCUS</button>
        </div>
    );
}

export default Formulario;