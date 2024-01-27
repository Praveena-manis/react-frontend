import React from 'react';
import Cover from './homecover';
import Slider from './slider';
import Layout from "./../components/Layout/Layout";
//eslint-disable-next-line
import Homepage from '../pages/user/home'
import { useAuth } from "../context/auth";
function Home(){
    //eslint-disable-next-line
    const [auth, setAuth] = useAuth();
    return( 
        <Layout title={"Best offers "}>{/*get layout page for header and footer */}
        <div className="home">             
            <Cover/>
            <Slider/> 
        </div>  
        </Layout>
    )
}
export default Home;
