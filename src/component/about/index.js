import React from "react";
import "./about.css";

import Aboutpix from "../img/aboutt.jpg";
const About =() =>{
    return(
        <>
            <section id="about">
			<div class="container">
				<div class="row">
					<div class=" col-xs-12 col-sm-8 col-md-6 col-lg-6  col-xl-6">
						<div class="content">
                        <img src={Aboutpix} />
                            
						</div>
						
					</div>
					<div class="col-xs-12 col-sm-8  col-md-6 col-lg-6  col-xl-6">
						<div class="content">
							<h2>About Us</h2>
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing 
								elit, sed do eiusmod tempor  incididunt ut labore 
								et dolore magna aliqua.  Ut enim ad minim veniam, 
								quis nostrud exercitation  ullamco laboris nisi ut
								 aliquip ex ea commodo  consequat. Duis aute 
								irure dolor in reprehenderit.
							</p>	
						</div>	
					</div>
				</div>
			</div>
		</section>	
        </>
    )
        
}
export default About