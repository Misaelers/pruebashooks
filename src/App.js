import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import Audio from './components/Audio';
import Debounce from './components/Debounce';
import Formulario from './components/Formulario';
import Localizacion from './components/Localizacion';
import LocalStorage from './components/LocalStorage';
import Productos from './components/Productos';
import Series from './components/Series';
import { useStateContext } from './providers/StateProvider';

const queryClient = new QueryClient();

function App() {

  const { data, dispatch } = useStateContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Productos />
        <Series />
        <Audio />
        <LocalStorage />
        {/* <Debounce />
        <Localizacion /> */}
        <p>{data.mensaje}</p>
        <p>{data.tareas.length}</p>

        <button onClick={() => dispatch({
          type: 'modificar_mensaje', // Tipo de evento que vamos a lanzar
          value: 'Nuevo mensaje'
        })}>Cambia mensaje</button>

        <button onClick={() => dispatch({
          type: 'agregar_tarea',
          value: { titulo: 'Bajar la basura', descripcion: 'Hay que bajar el plástico' }
        })}>Agregar Tarea</button>

        <Formulario />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

// Generar un componente StateProvider
// Dentro de este componente vamos a llevarnos toda la lógica del useReducer
// El provider debe inyectar el estado y el dispatch a través de un Contexto
// El mismo contexto debe inyectar los datos del estado y el dispatch
// Debemos generar un hook para poder acceder a ese contexto desde donde queramos