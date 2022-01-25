import React from "react";
import "./discount.css";
const Discount =() =>{
    return(
        <>
            <section id="discount">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 col-lg-6  col-xl-6">
                            <div className="content">

                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6  col-xl-6">
                            <div className="contentt">
                                <h5>Enjoy Up To 50% Off</h5>
                                <h2>Buy One Get</h2>
                                <h2> One Free </h2>
                                <h2>$54</h2>
                                <button className="btn">Order Now </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    
    )
        
}
export default Discount;