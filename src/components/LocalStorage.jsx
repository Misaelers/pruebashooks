import { useLocalStorage } from "react-use";

const LocalStorage = () => {

    const [loginDate, setLoginDate, removeLoginDate] = useLocalStorage('login_date', '');

    return (
        <div>
            <h2>LOCALSTORAGE</h2>
            <p>{loginDate}</p>
            <button onClick={() => setLoginDate(new Date())}>Cambia fecha</button>
            <button onClick={removeLoginDate}>Eliminar fecha</button>
        </div>
    );

}

export default LocalStorage;