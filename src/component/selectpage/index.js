import React from "react";
import "./select.css";
import pizza2 from "../img/pizza2.jpg";
import smallpizza from "../img/smallpizza.jpg";
import burgar from "../img/smallBurger.jpg";
import pasta from "../img/smallpasta.jpg";
import sandwich from "../img/sandwish.jpg";

const SelectPage = () =>{
    return(
        <>
            <section id="home">

                <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar">
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
                                    <a className="nav-link" href="#" target="">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="">MENU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="">CONTACT US</a>

                                </li>
                                <i className="fas fa-shopping-cart" style={{color: '#fff' , margin: '12px'}}></i>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="home-banner">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xs-12  col-sm-8 col-md-12 col-lg-12 col-xl-12 center ">
                                <div className="content" style={{marginTop: '20%'}}>
                                    <h1 className="heading">Try Our New Range Of Smokey Pizza</h1>
                                    <h4 style={{textAlign: 'center',
                                    color: '#fff',
                                    fontFamily: 'monospace',
                                    fontWeight: 500,
                                    fontSize: '34px',
                                    paddingtop: '2rem'}}> Select Pizza
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className=" row">
                            <div className=" col-xs-6 col-sm-12 col-md-12">
                                <div className="main">
                                    <div className="row">
                                        <div className=" col-xs-2 col-sm-3 col-md-3">
                                            <div className="card">
                                                <img src={smallpizza} style={{height: '7rem'}} />

                                            </div>
                                        </div>
                                        <div className="col-xs-2 col-sm-3 col-md-3">
                                            <div className="card">
                                                <img src={burgar} style={{height: '77px'}} />

                                            </div>
                                        </div>
                                        <div className="col-xs-2 col-sm-3  col-md-3 ">
                                            <div className="card">
                                                <img src={pasta} style={{height: '77px'}} />

                                            </div>
                                        </div>
                                        <div className="col-xs-2 col-sm-3  col-md-3 ">
                                            <div className="card">
                                                <img src={sandwich} style={{height: '77px'}} />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="select">
                <div className="container">
                    <div className=" row">
                        <div className=" col-xs-6 col-sm-12 col-md-12 col-lg-12">
                            <div className="content">
                                <div className="pizza-name">
                                    <h1>WUNSCH-PIZZA</h1>
                                    <h2>$11.00</h2>
                                </div>
                                <p>Flavours</p>
                                <div className="pizza-name" >
                                    <button type="button" className="btn btn-outline-danger mr-2">Pepperoni</button>
                                    <button type="button" className="btn btn-outline-danger ">BBQ Chicken</button>
                                    <button type="button" className="btn btn-outline-danger ml-2">Supreme</button>
                                    <button type="button" className="btn btn-outline-danger ml-2">Chicken Fajita</button>
                                </div>
                                <div style={{marginTop: '5%'}}>
                                    <img src={pizza2} alt="" />
                                </div>
                                <div className="size">
                                    <h4>S</h4>
                                    <h3 className="ml-2">M</h3>
                                    <h4 className="ml-2">L</h4>
                                </div>
                                <div className="loction">
                                    <div className="bottom">
                                        <h1>HOME</h1>
                                        <i className="fa fa-map-marker" aria-hidden="true" style={{float: 'left', marginRight: '12px'}}></i>
                                        <p>CORSO ITALI AA NAPLES, AZ 85022</p>
                                    </div>

                                    <button className="btn add-to-card" >ADD TO CART </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SelectPage