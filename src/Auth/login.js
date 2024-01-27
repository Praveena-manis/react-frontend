import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import './register.css';
import { BASE_URL } from '../../config';
import { useDispatch } from 'react-redux';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
    const login=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const requestData={email,password}
      const resp= await axios.post(`${BASE_URL}/api/v1/user/login`,requestData)
      if(resp.status===200){
        setLoading(false);
        toast.success(resp.data.message);
        localStorage.setItem("token",resp.data.result.token);
        localStorage.setItem('user',JSON.stringify(resp.data.result.user));
        dispatch({type:"LOGIN_SUCCESS",payload:resp.data.result.user});
        setLoading(false);
       navigate(location.state || "/");
      }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message);
        }
        setEmail('');
        setPassword('');
        
    }
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-3 col-lg-6 col-sm-12  d-flex'>
                    <div className='card shadow mt-5 '>
                        {loading?<><div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div></>:''}
                        <div className='card-body'>
                            <h4 className=' card-title text-center  mt-1 fw-100'>LOGIN</h4>
                            <form onSubmit={(e)=>login(e)}>
                                <input type='email'value={email} className='mb-2 mx-4 p-2 w-100'onChange={(e)=>setEmail(e.target.value)}placeholder="xyz@gmail.com" required/>
                                <input type='password'value={password}className='mb-2 mx-4 p-2 w-100' onChange={(e)=>setPassword(e.target.value)} placeholder="*******" required/>
                                <button type='submit' variant='dark'className='btn btn-primary'>Login</button>
                                <hr className='mx-5'></hr>
                                <div className='mt-3 mb-5'>
                                    <button type="submit" variant='dark'>
                                        <span>Don't have an account?</span>
                                        <NavLink to="/register" className='sign'>Register</NavLink>
                                    </button>
                                </div>
                            </form>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;