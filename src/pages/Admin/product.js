import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from "../../components/Layout/Layout";
import AdminMenu from '../../components/Layout/AdminMenu';
import './product.css';
const Products = () => {
  //get product details in admin and used edit and delete button 
  const [products, setProducts] = useState([]);
  const getallproducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/product/getallproduct`);
      if (response.status === 201) {
        setProducts(response.data.product);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  useEffect(() => {
    getallproducts();
  }, []);
  return (
    <Layout>
      <div className='container1'>
        <div className='row'>
          <div className='admin  col-md-3 '>
            <AdminMenu /> {/*linked admin menu*/}
          </div>
          <div className=' col-md-9'>
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap">
              {/*used map function for getting the product details*/}
              {products.map((p) => (
                <div className="card" style={{ width: "18rem" }}>
                  <img src={`${BASE_URL}/api/v1/product/download/${p.image}`} className="card-img-top" alt="..." width="300" height="350" />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">RS.{p.price}</p>
                    <button><Link to={`/dashboard/admin/updateproduct/${p._id}`}>EDIT</Link></button>
                    {/*used link for updateproduct page with id for editing and deleting*/}
                    <button><Link to={`/dashboard/admin/updateproduct/${p._id}`}>DELETE</Link></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Products;