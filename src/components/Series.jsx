import { useQuery } from "react-query";

const Series = () => {
    const getSeries = async () => {

        const response = await fetch('https://peticiones.online/api/series');

        return await response.json();

    }

    const { data, status } = useQuery('series', getSeries);

    if (status === 'loading') return <p>Cargando las series ...</p>;
    if (status === 'error') return <p>Error en la descarga ...</p>
    return (
        <div>
            {data.map(serie => (
                <div key={serie.id}>
                    <h3 >{serie.title}</h3>
                    <img src={serie.image} alt="" />
                </div>
            ))}
        </div>
    )

}

export default Series;
