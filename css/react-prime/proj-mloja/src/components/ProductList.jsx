import { useEffect, useState } from "react";
import { API } from "../services";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
        const request = await API.get('/products');
        setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    console.log(products);

    return (
        <>
            <ProductCard />
        </>
    );
}
 
export default ProductList;