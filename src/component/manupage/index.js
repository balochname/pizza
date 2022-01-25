import React from "react";
import "./manuu.css";
import smallpizza from "../img/smallpizza.jpg";
import burgar from "../img/smallBurger.jpg";
import pasta from "../img/smallpasta.jpg";
import sandwich from "../img/sandwish.jpg";
import Manu from "../manu";
const  ManuPage= ()=> {
    return (
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
                                    <i className="fas fa-shopping-cart" style={{ color: '#fff', margin: '12px' }}></i>
                                </ul>
                            </div>
                        </div>
                    </nav>
                <div className="home-banner">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xs-12  col-sm-8 col-md-12 col-lg-12 col-xl-12 center ">
                                <div className="content" style={{ marginTop: '20%' }}>
                                    <h1 className="heading">Try Our New Range Of Smokey Pizza</h1>
                                    <h4 style={{
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontFamily: 'monospace',
                                        fontWeight: '500',
                                        fontSize: '34px',
                                        paddingTop: '2rem'
                                    }}> Manu</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class=" row">
                            <div class=" col-xs-2 col-sm-12 col-md-12">
                                <div class="main">
                                    <div class="row">
                                        <div class=" col-xs-2 col-sm-3 col-md-3">
                                            <div class="card">
                                                <img src={smallpizza} style={{ height: '7rem' }} />

                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-sm-3 col-md-3">
                                            <div class="card">
                                                <img src={burgar} style={{ height: '77px' }} />
                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-sm-3  col-md-3 ">
                                            <div class="card">
                                                <img src={pasta} style={{ height: '77px' }} />
                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-sm-3  col-md-3 ">
                                            <div class="card">
                                                <img src={sandwich} style={{ height: '77px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Manu/>                          
        </>
    );
}

export default ManuPage;