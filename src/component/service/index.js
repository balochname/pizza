import React from "react";
import "./service.css";
import order from "../img/order.png";
import delivery from "../img/delivery.png";
import pizzaicon from "../img/pizzaicon.png";

const Service =() =>{
    return(
        <>
            <section id='service'>
			<div className="service_content" >
				<h1>This Month Famous Items</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
			</div>
			<div className="container">
				<div className=" row">
					<div className=" col-xs-6 col-sm-12 col-md-12">
						<div className="main">
							<div className="row">
								<div className=" col-xs-2 col-sm-4 col-md-4">
									<div className="card">
										<img src={order} alt="" style={{height: '77px'}}/>
										<h5>Order Online</h5>
									</div>
								</div>
								<div className="col-xs-2 col-sm-4 col-md-4">
									<div className="card">
										<img src={delivery} alt="" style={{height: '80px'}}/>
										<h5> Fast Delivery</h5>
									</div>
								</div>
								<div className="col-xs-2 col-sm-4  col-md-4 ">
									<div className="card">
										<img src={pizzaicon} alt="" style={{height: '85px'}}/>
										<h5> Good Quality </h5>
									</div>
								</div>
							
							</div>	
						</div>

					</div>
				</div>
			</div>
	 	</section>
	 	
        </>
    )
} 
export default Service       