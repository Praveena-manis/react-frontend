import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
const { Option } = Select;

const UpdateProduct = () => {
   
  //update and delete product function
  const navigate = useNavigate();//used navigate
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
     //eslint-disable-next-line
  const [id, setId] = useState("");

  // get single product
  const getSingleProduct = async () => {
    try { //get single product for getting the previous value using axios 
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/product/getproduct/${params.id}`
      );
      setName(data.productbyid.name); //after getting the value then set the value in their corresponding data
      setId(data.productbyid._id);
      setDescription(data.productbyid.description);
      setPrice(data.productbyid.price);
      setQuantity(data.productbyid.quantity);
      setShipping(data.productbyid.shipping);
      setCategory(data.productbyid.category._id);
      setRating(data.productbyid.rating);
      setReviews(data.productbyid.reviews);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/category/getcategory`);//get category using axios and store value in data
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function then append the data in FormData
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("image", image);
      productData.append("category", category);
      productData.append("rating", rating);
      productData.append("reviews", reviews);
      productData.append("shipping", shipping);
      //used axios and put method is used to update the product with their id using params
      const { data } = await axios.put(
        `${BASE_URL}/api/v1/product/updateproduct/${params.id}`,
        productData
      );
      if (data.success) {
        navigate("/dashboard/admin/allproducts");//after updating is successfull then use navigate to allproducts page
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
         //eslint-disable-next-line
      const data = await axios.delete(
        `${BASE_URL}/api/v1/product/deleteproduct/${params.id}`
      );
      //used delete for deleting the product with their id using params
      toast.success("Product Deleted Successfully");
      navigate("/dashboard/admin/allproducts");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">{/*created admin menu page with admin dashboard,create category,add product,update and delete product*/}
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update and Delete Product</h1>
            <div className="m-1 w-75">
              {/*used select for selecting the category*/}
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {/*used map function for getting the name with id*/}
                {categories.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              {/*used input type as text and used onChange event with placeholder*/}
              <input type='text' className='form-control2 mt-3' placeholder='Name of the Product'
                value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <input type='text' className='form-control2 mt-3' placeholder='description of the Product'
                value={description} onChange={(e) => setDescription(e.target.value)} />
              <br />
              {/*used input type as number*/}
              <input type='number' className='form-control2 mt-3' placeholder='Price of the Product'
                value={price} onChange={(e) => setPrice(e.target.value)} />
              <br />
              <input type='number' className='form-control2 mt-3' placeholder='Quantity of the Product'
                value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <br />
              {/*used input type as file for uploading images*/}
              <input type='file' className='form-control2 mt-3'
                onChange={(e) => setImage(e.target.files[0])} />
              <br />
              <input type='number' className='form-control2 mt-3' placeholder='Rating of the Product'
                value={rating} onChange={(e) => setRating(e.target.value)} />
              <br />
              <input type='number' className='form-control2 mt-3' placeholder='Reviews of the Product'
                value={reviews} onChange={(e) => setReviews(e.target.value)} />
              <br />
              {/*used select for selecting the shipping*/}
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              {/*used button and onClick event for updating product */}
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              {/*used button and onClick event for deleting product */}
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
