import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from "../../components/Layout/Layout";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices";
import { useCart } from '../../context/cart';
import { AiOutlineReload } from "react-icons/ai";
const Home = () => {
  //used usestate and navigate and get cart info from contextapi
  const navigate=useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart,setCart]=useCart();
 
  const getAllCategory = async () => {
    try {
      //get category from axios and get method
      const { data } = await axios.get(`${BASE_URL}/api/v1/category/getcategory`);
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  const getAllProducts = async () => {
    try {
      setLoading(true);
      //get page info from axios 
      const response = await axios.get(`${BASE_URL}/api/v1/product/productlist/${page}`);
        setLoading(false);
        setProducts(response.data.products);
      }
     catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  const getTotal = async () => {
    try {
      //get product count using axios
      const  data = await axios.get(`${BASE_URL}/api/v1/product/productcount`);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (page === 1) return;
    load();
    //eslint-disable-next-line
  }, [page]);
  const load = async () => {
    try {
      setLoading(true);
      //get page number to list product details using axios
      const data  = await axios.get(`${BASE_URL}/api/v1/product/productlist/${page}`);
      setLoading(false);
      setProducts([...products, ...data.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; 
  //used filter and pushed the id 
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next-line
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
    //eslint-disable-next-line
  }, [checked, radio]);
  const filterProduct = async () => {
    try {
      //get productfilter checked and radio using axios and post method
      const { data } = await axios.post(`${BASE_URL}/api/v1/product/productfilters`, {
        checked,
        radio,
      });
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - E-commerce "}>
      <div className="container-fluid row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {/*used map function for the categories and used checkbox with onChange event*/}
            {categories.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            {/*used radio button with onChange event and used map function for the prices*/}
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            {/*used button with onclick event to reset filters*/}
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className='col-md-9 offset-1'>
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex px-20 mx-3">
            {/*used map function for listing the products*/}
            {products.map((p) => (
              <div className="card" style={{ width: "18rem" }}>
                <img src={`${BASE_URL}/api/v1/product/download/${p.image}`} className="card-img-top" alt="..." width="200" height="350" />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">Rs.{p.price}</p>
                  {/*used button with onclick event to navigate to productdetails page*/}
                  <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/productdetails/${p._id}`)}
                    >
                      More Details
                    </button>
                    {/*used button with onClick event and used cart values and items are added to the cart*/}
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                     
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {/*used button with onClick event for page loading*/}
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  
  )
}

export default Home;