import React from 'react';
import "./Cartadd.css"
const Cartadd = (props) => {

    const { cart } = props;

    let total = 0;
    for (const artist of cart) {
        total = total + artist.salary;
    }

    return (

        <div>
            <h4><i className="fas fa-user"></i> Add : {props.cart.length}</h4>
            <h6>Total Cost : $ {total}</h6>
            <ol>
                {
                    cart.map(artist => <li key={artist.id}>Name : {artist.name}</li>)
                }
            </ol>
            <button className="btn btn-danger" >Buy Now</button>


        </div>
    );
};

export default Cartadd;


