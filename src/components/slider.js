import React from 'react';
import { Link } from 'react-router-dom';//used link in router
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //used fontawesome icon
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; //used cart icon
function Slider() {
    return ( 
        <>
        {/*large screen*/}
        <div className="container-fluid d-none d-lg-block">
        <h1 className='text-center'>Featured Products</h1>
      <div id="largeslider" className="carousel slide" data-bs-ride="carousel">{/*used carousel with 4 images and 3 slider*/}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-3">
                  <div className="card" style={{width:'300px'}}>{/*used card for images*/}
                    <img src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/e/o/d/-original-imaggcb5cybyryeh.jpeg?q=90&crop=false" height="300"className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Shoe</h5>
                      <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>       
                       <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{width:'300px'}}>
                    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg" height="300" className="card-img-top" alt="..."/>                <div className="card-body">
                      <h5 className="card-title">Frock</h5>
                      <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>    
                      <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>        
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{width:'300px'}}>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/SO/PK/KA/9664580/ladies-designer-dress.jpg" height="300"className="card-img-top" alt="..."/>
                        <div className="card-body">
                      <h5 className="card-title">Maxi</h5>
                      <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                      <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{width:'300px'}}>
                    <img src="https://images.meesho.com/images/products/111823528/jcbfd_512.webp"height="300"className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Shirt</h5>
                      <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                      <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://image.made-in-china.com/2f0j00rWHRYahmuzkG/Fashion-Flower-Girl-Dress-Party-Birthday-Wedding-Princess-Baby-Girls-Clothes-Children-Kids-Girl-Dresses.webp" height="300"className="card-img-top" alt="..."/>             <div className="card-body">
                    <h5 className="card-title">White Dress</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://imagescdn.planetfashion.in/img/app/product/6/675816-7058182.jpg?auto=format" height="300" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Formal Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon" icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://www.jiomart.com/images/product/original/rvowvf0akl/eyebogler-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-teal-t-shirt-product-images-rvowvf0akl-0-202211051905.jpg?im=Resize=(500,630)" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">T-Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/8/XB/IJ/NG/113884685/3-500x500.jpeg"height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Saree</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/p/e/q/-original-imagrdzfjy92rbgg.jpeg?q=90" height="300" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Watch</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2211743/2022/4/26/2d0ab7cc-5881-4f62-b7fd-5cf7062c2ea51650951584582-Roadster-Men-Silver-Toned-Analogue-Watch-MFB-PN-WTH-9720G-39-7.jpg" height="300" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Titan</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://i.pinimg.com/originals/db/87/62/db87623c25753f012b723a1797765bfe.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Traditional</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://images.meesho.com/images/products/138546517/jih8i_512.webp" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Kid T-Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon" icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
            </div>   
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#largeslider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#largeslider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      {/*mediun screen*/}
      <div className="container-fluid d-none d-md-block d-lg-none">
      <h1>Featured Products</h1>
    <div id="medslider" className="carousel slide" data-bs-ride="carousel"> {/*used carousel for medium screen with 2 images*/}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}> {/*used card for displaying images*/}
                  <img src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/e/o/d/-original-imaggcb5cybyryeh.jpeg?q=90&crop=false" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Shoes</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>          
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} /> {/*used cart icon from font awesome*/}
                        AddCart</Link>                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card"style={{width:'300px'}}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/SO/PK/KA/9664580/ladies-designer-dress.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Maxi</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>           
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg" height="300" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Frock</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>             
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://i.pinimg.com/originals/db/87/62/db87623c25753f012b723a1797765bfe.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Traditional</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>            
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://www.jiomart.com/images/product/original/rvowvf0akl/eyebogler-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-teal-t-shirt-product-images-rvowvf0akl-0-202211051905.jpg?im=Resize=(500,630)" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">T-Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://imagescdn.planetfashion.in/img/app/product/6/675816-7058182.jpg?auto=format" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Formal</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://images.meesho.com/images/products/111823528/jcbfd_512.webp"height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://assets.ajio.com/medias/sys_master/root/20221230/wXVL/63aec149aeb269659c17e981/-473Wx593H-443007815-ltgrey-MODEL.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Pant</h5>
                     <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                     <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
                </div>
              </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#medslider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#medslider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/*small screen*/}
    <div className="container-fluid d-block d-sm-block d-md-none d-lg-none">
      <h1>Featured Products</h1>
    <div id="smslider" className="carousel slide" data-bs-ride="carousel">{/*used carousel for small screen with 1 images*/}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-12">
                <div className="card" style={{width:'300px'}}> {/*used card for displaying images*/}
                  <img src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/e/o/d/-original-imaggcb5cybyryeh.jpeg?q=90&crop=false" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Shoes</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p>
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} /> {/*used cart icon from font awesome*/}
                        AddCart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-12">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/SO/PK/KA/9664580/ladies-designer-dress.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Maxi</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg" height="300" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Frock</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                <div className="card"style={{width:'300px'}}>
                  <img src="https://i.pinimg.com/originals/db/87/62/db87623c25753f012b723a1797765bfe.jpg" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Traditional</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://www.jiomart.com/images/product/original/rvowvf0akl/eyebogler-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-teal-t-shirt-product-images-rvowvf0akl-0-202211051905.jpg?im=Resize=(500,630)" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">T-shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                <div className="card"style={{width:'300px'}}>
                  <img src="https://imagescdn.planetfashion.in/img/app/product/6/675816-7058182.jpg?auto=format" height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Formal</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                <div className="card" style={{width:'300px'}}>
                  <img src="https://images.meesho.com/images/products/111823528/jcbfd_512.webp"height="300"className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Shirt</h5>
                    <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                    <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className="carousel-item">
                <div className="row">
              <div className="col-12">
                  <div className="card" style={{width:'300px'}}>
                    <img src="https://assets.ajio.com/medias/sys_master/root/20221230/wXVL/63aec149aeb269659c17e981/-473Wx593H-443007815-ltgrey-MODEL.jpg" height="300"className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Pant</h5>
                      <p className="card-text"/><s>Rs.3000</s> <p>Rs.1500</p> 
                      <Link to="/home" className="btn btn-primary"> <FontAwesomeIcon className="icon"icon={faCartShopping} />
                        AddCart</Link>
                    </div>
                  </div>
              </div>
                </div>
              </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#smslider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#smslider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
       
  </>
  );
}

export default Slider;