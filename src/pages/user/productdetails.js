import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout/Layout';
import Star from '../../pages/user/starrating';
import { useCart } from '../../context/cart';
function ProductDetails() {
    //used state,params and cart context api
    const [product, setProduct] = useState({});
    const params = useParams();
    const [cart, setCart] = useCart();
//used params,get and axios to fetch data from backend
    const fetchData = async () => {
        try {
            const resp = await axios.get(`${BASE_URL}/api/v1/product/getproduct/${params.id}`);
            setProduct(resp.data.productbyid);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (params.id)
            fetchData();
        //eslint-disable-next-line
    }, [params.id])

    return (
        <Layout>
            <div className='container1'>
                <div className='row'>
                    <h1 className="text-center">Product Details</h1>
                    <div className=' col-md-4'>
                        {/*get product details and used onClick event for storing the product into cart*/}
                        <img src={`${BASE_URL}/api/v1/product/download/${product.image}`} className="card-img-top" alt="..." width="150" height="350" />
                        <div className="col-md-6 ">
                            <h6>Name : {product.name}</h6>
                            <h6>Description : {product.description}</h6>
                            <h6>Price :Rs {product.price}</h6>
                            <Star />
                            <h6>Reviews : {product.reviews}</h6>
                            <button
                                className="btn btn-secondary ms-1"
                                onClick={() => {
                                    setCart([...cart, product]);
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify([...cart, product])
                                    );
                                    toast.success("Item Added to cart");
                                }}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;