import React from "react";
import "./order.css";
import pizza2 from "../img/pizza2.jpg";
import pasta from "../img/pasta.jpg";
import salad from "../img/salad.jpg";

const OrderPage = () =>{
    return(
        <>
            <section id="home">

                <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar navbar-fixed">
                    <div className="container">

                        <a className="navbar-brand" href="#" target="">
                            <strong>Pizza</strong>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">HOME
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" targe="">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" targe="">MENU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" targe="">CONTACT US</a>

                                </li>
                                <i className="fas fa-shopping-cart" style={{color: '#fff', margin: '12px'}}></i>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="home-banner">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xs-12  col-sm-8 col-md-12 col-lg-12  col-xl-12 center ">
                                <div className="content">
                                    <h1 className="heading">Order Now</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="table">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-lg-8 center">
                            <div className="content">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Items</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><img src={pizza2} alt="" style={{ height: '80px' }} /> Pizza</th>
                                            <td>1x MEDIUM</td>
                                            <td>30$</td>
                                            <td className="cancel">Cancel</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src={pasta} alt="" style={{ height: '60px' }} />Pasta</th>
                                            <td>1</td>
                                            <td>20$</td>
                                            <td className="cancel">Cancel</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src={salad} alt="" style={{ height: '56px' }} />Salad</th>
                                            <td>1</td>
                                            <td>10$</td>
                                            <td className="cancel">Cancel</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn" style={{
                                    background: '#ff6221',
                                    color: '#fff',
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    float: 'right',
                                    border: 'none',
                                    marginTop: '20px',
                                    width: '10rem'
                                }}>GO TO CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	
        </>
    )
}
export default OrderPage