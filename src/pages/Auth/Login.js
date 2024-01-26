import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import './register.css';
import { BASE_URL } from '../../config';
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { useDispatch } from 'react-redux';
function Login() { //Login function
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [auth, setAuth] = useAuth();//get user information using context api
     //eslint-disable-next-line
    const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
    const login=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const requestData={email,password}
      const resp= await axios.post(`${BASE_URL}/api/v1/user/login`,requestData) //used axios and post data from login backend
      if(resp.status===200){
        setLoading(false);
        toast.success(resp.data.message);//if the status is 200 then display success message using toast
        setLoading(false);
        if (resp && resp.data.success) {
            toast.success(resp.data && resp.data.message);
            setAuth({//state updated and get user details and token  
              ...auth,
              user: resp.data.result.user,
              token: resp.data.result.token,
            });
            localStorage.setItem("auth", JSON.stringify(resp.data));//set item in localstorage for user info
            navigate(location.state || "/");           
          } else {
            toast.error(resp.data.message);
          }
    
      }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message);//display error message using toast
        }
        setEmail('');
        setPassword('');
        
    }
    return (  
        <Layout>
            <div className='container'> {/*used container with rows and cols for responsive*/}
            <div className='row'>
                <div className='col-md-6 offset-3 col-lg-6 col-sm-12  d-flex'>
                    <div className='card shadow mt-5 '>
                        {loading?<><div class="spinner-border text-primary" role="status"> {/*used spinner for loading*/}
                            <span class="visually-hidden">Loading...</span>
                            </div></>:''}
                        <div className='card-body'> {/*created a card*/}
                            <h4 className=' card-title text-center  mt-1 fw-100'>LOGIN</h4>
                            <form onSubmit={(e)=>login(e)}>{/*used form with event handler*/}
                                <input type='email'value={email} className='mb-2 mx-4 p-2 w-100'onChange={(e)=>setEmail(e.target.value)}placeholder="xyz@gmail.com" required/>{/*input type as email and used onChange event and used placeholder*/}
                                <input type='password'value={password}className='mb-2 mx-4 p-2 w-100' onChange={(e)=>setPassword(e.target.value)} placeholder="*******" required/>{/*input type as password and used onChange event and used placeholder*/}
                                <button type='submit' variant='dark'className='btn btn-primary'>Login</button>{/*used button type as submit*/}
                                <hr className='mx-5'></hr>
                                <div className='mt-3 mb-5'>
                                    <button type="submit" variant='dark'>
                                        <span>Don't have an account?</span>
                                        <NavLink to="/register" className='sign'>Register</NavLink>{/*used navlink to register page for new user*/}
                                    </button>
                                </div>
                            </form>
                            <ToastContainer/>{/*used toast container for displaying messages*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Login;