export const fetchProductos = async() => {
    const Base_Url = 'https://angular-store-api.onrender.com/taller-web-2/api/products';

    try {
        const response  = await fetch(Base_Url);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Error fetch data",error);
        throw error;
    }
}


export const fetchProductosByid  = async(id) => {
    

    try {
        const response  = await fetch(`https://angular-store-api.onrender.com/taller-web-2/api/products/${id}`);
        const data = await response.json();
        return data[0];
    } catch(error){
        console.error("Error fetch data",error);
        throw error;
    }
}

