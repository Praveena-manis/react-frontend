import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './register.css';
import Layout from "./../../components/Layout/Layout";
import { BASE_URL } from '../../config';
function Register() {
    //used usestate for storing values
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [loading,setLoading]=useState(false);
    const signup=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            //post the user details for registration using axios and post method
            const requestData={name,email,password,phone,address}
      const resp= await axios.post(`${BASE_URL}/api/v1/user/register`,requestData)
      if(resp.status===201){
        setLoading(false);
        toast.success(resp.data.message);
      }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message);
        }
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAddress('');
        
    }
    return (  
        <Layout title="Register - Ecommerce App">
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-3 col-lg-6 col-sm-12  d-flex'>
                    <div className='card shadow mt-5 '>{/*used spinner for loading*/}
                    {loading?<><div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div></>:''}
                        <div className='card-body'>
                            <h4 className=' card-title text-center  mt-1 fw-100'>Register</h4>
                            {/*used form onsubmit with event using input type as email,text,password and tel for phone with onChange event and placeholder*/}
                            <form onSubmit={(e)=>signup(e)}>
                                <input type="text" value={name} className='mt-2 mx-4 p-2 mb-2 w-100 align-item-center' onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name' required/>
                                <input type='email'value={email} className='mb-2 mx-4 p-2 w-100'onChange={(e)=>setEmail(e.target.value)}placeholder="xyz@gmail.com" required/>
                                <input type='password'value={password}className='mb-2 mx-4 p-2 w-100' onChange={(e)=>setPassword(e.target.value)} placeholder="*******" required/>
                                <input type='address'value={phone}className='mb-2 p-2 mx-4 w-100' onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your Mobile Number" required/>
                                <input type='tel'value={address} className='mb-2 p-2 mx-4 w-100'onChange={(e)=>setAddress(e.target.value)}placeholder="Enter your Address" required/>
                                <button type='submit' className='btn btn-primary'>Sign up</button> {/*used button for signup with type as submit*/}
                                <hr className='mx-5'></hr>
                                <div className='mt-3 mb-5'>
                                    <button type="submit" className="custom-btn custom-btn-white">
                                        <span>Already have an account?</span>
                                        <NavLink to="/login" className='sign'>Log In</NavLink> {/*already have an account used navlink to login*/}
                                    </button>
                                </div>
                            </form>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}
export default Register;