import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
//import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
const { Option } = Select;

const AddProduct = () => {
  //used navigate and usestate for storing the values
 // const navigate = useNavigate();
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

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/category/getcategory`);
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

  //create product function and append from FormData
  const handleCreate = async (e) => {
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
      const data = axios.post(
        `${BASE_URL}/api/v1/product/addproduct`,
        productData
      );
      if (data.success) {
        toast.error(data.message);
      } else {
        toast.success("Product Created Successfully");
       // navigate("/dashboard/admin/allproducts");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />{/*linked admin menu*/}
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              {/*used select for select the category*/}
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {/*used map for selecting category*/}
                {categories.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              {/*used onsubmit with input type as text and onchange event and placeholder  */}
              <form onSubmit={handleCreate}>
                <input type='text' className='form-control2 mt-3' placeholder='Name of the Product'
                  value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type='text' className='form-control2 mt-3' placeholder='description of the Product'
                  value={description} onChange={(e) => setDescription(e.target.value)} />
                <br />
                {/*input type as number for price and quantity*/}
                <input type='number' className='form-control2 mt-3' placeholder='Price of the Product'
                  value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <input type='number' className='form-control2 mt-3' placeholder='Quantity of the Product'
                  value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <br />
                {/*input type as file and used onchange event*/}
                <input type='file' className='form-control2 mt-3'
                  onChange={(e) => setImage(e.target.files[0])} />
                <br />
                <input type='number' className='form-control2 mt-3' placeholder='Rating of the Product'
                  value={rating} onChange={(e) => setRating(e.target.value)} />
                <br />
                <input type='number' className='form-control2 mt-3' placeholder='Reviews of the Product'
                  value={reviews} onChange={(e) => setReviews(e.target.value)} />
                <br />
                <div className="mb-3">
                  {/*used select for selecting the shipping or not*/}
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
              </form>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ADD PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AddProduct;
