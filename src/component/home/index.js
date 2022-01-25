import React from "react";
import "./home.css";

const Home =() =>{
    const testurl=()=>{
        // url:'http://localhost:3000/manu';
        window.open('http://localhost:3000/select')
    }
    return(
        <>
            <section id="home">

                {/* <header>
                    <h4 style={{color:' #fff', justifyContent:' center', textAlign: 'center'}}> Header</h4>
                </header> */}

                <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar ">
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
                                    <a className="nav-link" href="#about" target="">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#manu" target="">MENU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#abc" >CONTACT US</a>

                                </li>
                                <i className="fas fa-shopping-cart" style={{color:' #fff' , margin:' 12px'}}></i>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div class="row">
                        <div class=" col-xs-12  col-sm-8 col-md-8 col-lg-6  col-xl-6 center letf">
                            <div class="content">
                                <h1 class="heading">Try our New Range of Smokey Pizza</h1>
                                <button onClick={testurl} class="btn" id="order"> Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    
    )
        
}
export default Home