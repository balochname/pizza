import React from "react";
import "./contact.css";
import mappix from "../img/map.PNG";
const Contact = () => {
    return (
        <>
            <section id="abc">
                <div className="service_content" >
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="container">
                    <div className="main">
                        <div className=" row">
                            <div className="col-md-6 col-lg-6">
                                <div className="contentt">
                                    <i className="fa fa-map-marker" aria-hidden="true" style={{width: '32px'}}></i>
                                    <h5>ADDRESS:</h5>
                                </div>
                                <p>Block 10. Gulshan e Iqbal</p>

                                <div className="contentt">
                                    <i className="fa fa-phone-square" aria-hidden="true" style={{width: '32px'}}></i>
                                    <h5>PHONE:</h5>
                                </div>
                                <p>092 223 678</p>

                                <div className="contentt">
                                    <i className="fa fa-envelope" aria-hidden="true" style={{width: '32px'}}></i>
                                    <h5>EMAIL:</h5>
                                </div>
                                <p>pizza@gmail.com</p>

                            </div>
                            <div className="col-md-6 col-lg-6">
                                {/* <img src={mappix} /> */}
                                <iframe src="http://maps.google.com/maps?q=24.9168718,67.0964936&z=21&output=embed" height="400" width="500"></iframe>
                            </div>
                        </div>

                    </div>
                    <div className="footer">
                        <hr />
                        <div className="main">
                            <div className="contentt">
                                <h1>Pizza</h1>
                                <h5 className="ml-auto">+092 234 987</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Contact        