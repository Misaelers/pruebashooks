import { createContext, useContext, useReducer } from "react";

const stateContext = createContext();
export const useStateContext = () => {
    return useContext(stateContext);
}

const initialState = {
    tareas: [],
    mensaje: ''
}

const reducer = (state, action) => {
    // Esta función siempre debe retornar un NUEVO objeto que será el que represente el   nuevo estado
    switch (action.type) {
        case 'modificar_mensaje': {
            return { ...state, mensaje: action.value }
        }
        case 'agregar_tarea': {
            return { ...state, tareas: [...state.tareas, action.value] }
        }
        default: {
            return state;
        }
    }
}

const StateProvider = ({ children }) => {

    const [data, dispatch] = useReducer(reducer, initialState);

    return (
        <stateContext.Provider value={{ data, dispatch }}>
            {children}
        </stateContext.Provider>
    )

}

export default StateProvider;