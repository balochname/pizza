import React, { Component } from "react";
import "./manu.css";
import pizza2 from "../img/pizza2.jpg";
import Card from 'react-bootstrap/Card';
import PostData from "../../data.json";
class Manu extends Component {
    render() {
        const testurl=()=>{
            // url:'http://localhost:3000/manu';
            window.open('http://localhost:3000/manu')
        }
        return (
            <>
                <section id='manu'>
                    <div>
                        <h1>This Month Famous Manu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className=" col-xs-6 col-sm-12 col-md-12 ol-lg-12 ">
                                <div className="main">
                                    {
                                        PostData.map((postDetail, index) => {
                                            return (
                                                <div className="row">
                                                    <div className=" col-xs-2 col-sm-4 col-md-6 col-lg-6  ">
                                                        <div className="box-container" style={{ marginRight:'8rem' }}>
                                                            <div className="box">
                                                                <img src={pizza2} alt="" />
                                                                <div className="starts" style={{ color: '#ffc107' }}>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="far fa-star"></i>
                                                                </div>
                                                                <div>
                                                                    <h3>{postDetail.name}</h3>
                                                                    <p>{postDetail.dis}</p>
                                                                    <h4>{postDetail.price}
                                                                        <i className="fas fa-shopping-cart" style={{ color: ' #ff6221', marginLeft: ' 80px' }}></i>
                                                                    </h4>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                      

                                    {/* <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            {PostData.map((postDetail, index) => {
                                                return <div>
                                                    <Card.Title>{postDetail.name}</Card.Title>
                                                    <Card.Text>{postDetail.price}</Card.Text>
                                                </div>
                                            })}
                                        </Card.Body>
                                    </Card> */}
                                </div>
                               
                                <button onClick={testurl} class="btn mbtn"> Manu</button>
                            </div>
                        </div>
                    </div>
                   
                </section>
            </>
        )
    }

}
export default Manu        