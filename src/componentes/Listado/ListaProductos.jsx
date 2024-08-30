import { useEffect, useState } from "react";
import { fetchProductos  } from "./api";

function ListaProductos() {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductos();
                setProducto(data);
                setLoading(false);
            } catch (error) {
                console.error(error); 
                setLoading(false);
            }
        };

        fetchData();  
    }, []);  

    return (
        <div>
            <h2>Productos</h2>
            {loading ? (
                <p>Cargando Productos...</p>
            ) : (
                <ul className="lista-productos">
                    {productos.map((producto) => (
                        <li key={producto.id} className="personaje-item">
                            <h3>{producto.name}</h3>
                            <p>Categoria: {producto.category}</p>
                            <p>Descripcion: {producto.description}</p>
                            <p>Precio:${producto.price}</p> 
                            
                        
                            
                        
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaProductos;
