import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="header-container">
            <h2>Hire Artists</h2>
            <a style={style} href="/home">Home</a>
            <a style={style} href="/about">About</a>
            <a style={style} href="/policy">Policy</a>
            <a style={style} href="/tune">Tune</a>
            <a style={style} href="/contact">Contact</a>
        </div>
    );
};
const style = {
    color: "white",
    margin: "100px 5px",
    textDecoration: "none",
}

export default Header;