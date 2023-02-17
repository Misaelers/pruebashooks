import { useState } from "react";
import { useQuery } from "react-query";

const Productos = () => {

    const [page, setPage] = useState(1);

    const getProductos = async ({ queryKey }) => {
        const response = await fetch(`https://peticiones.online/api/products?page=${queryKey[1]}`)
        return await response.json();
    }

    const { data, status } = useQuery(['products', page], getProductos);

    if (status === 'loading') return <p>Cargando los productos ...</p>;
    if (status === 'error') return <p>Error en la descarga ...</p>;

    return (

        <div>
            <button onClick={() => setPage(page + 1)}>Incrementa</button>
            <button onClick={() => setPage(page - 1)}>Decrementa</button>
            {data.results.map(product => (

                <div key={product.id}>
                    <h4>{product.name} </h4>
                    <img src={product.image} alt="" />
                </div>

            ))}

        </div>


    )

}

export default Productos;