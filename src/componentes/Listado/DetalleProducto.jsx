import { useEffect, useState } from "react";
import { fetchProductosById } from "./api"; 
import { useParams } from "react-router-dom";
import productos from "../roducto/DatosProductos";

function DetalleProducto() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductosById(id);
                setProducto(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    if (loading) {
        return <div> Cargando...</div>

} else {
    return (
 <div>
    <h2>Detalle productos</h2>
        <p> Nombre:{productos.name} </p>
        <p>Casa: {productos.description}</p>
        <p>Precio: {productos.price}</p>
        <p>Categoria: {productos.category}</p>
        <img src={productos.image} alt={productos.name}></img>
            
</div >

    );
}}

export default DetalleProducto;
