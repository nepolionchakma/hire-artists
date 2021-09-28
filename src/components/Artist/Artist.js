import React from 'react';
import "./Artist.css"

const Artist = (props) => {
    // console.log(props.name)
    // Distructure props
    const { name, age, img, genre, country, salary } = props.artist
    return (
        <div className="shadow m-3 p-4 artist-container">

            {/* Left Side Artist */}

            <div className="text-center my-3">
                <img src={img} alt="" />
            </div>
            <div>
                <h5>Name : {name}</h5>
                <h5>Age : {age}</h5>
                <h5>Country : {country}</h5>
                <h5>Genre : {genre}</h5>
                <h5>Salary : ${salary}</h5>
                <div className="text-center">
                    <button className="btn btn-success px-5 my-3" onClick={() => props.handlerAddToCart(props.artist)} ><i className="fas fa-shopping-cart"></i> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Artist;