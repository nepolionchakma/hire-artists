import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cartadd from '../Cartadd/Cartadd';
import "./Body.css"



const Body = () => {

    const [artists, setArtists] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("./fakedata.JSON")
            .then(res => res.json())
            .then(data => setArtists(data))
    }, [])

    const handlerAddToCart = (artist) => {
        const newCart = [...cart, artist];
        setCart(newCart)
    }


    // console.log(artists)
    return (

        <div className="body-container">
            <div className="body-left">
                {
                    artists.map(artist => <Artist

                        key={artist.id}
                        artist={artist}
                        handlerAddToCart={handlerAddToCart}
                    >

                    </Artist>)
                }
            </div>
            <div className="body-right shadow p-5">

                <Cartadd cart={cart} > </Cartadd>

            </div>
        </div>
    );
};



export default Body;