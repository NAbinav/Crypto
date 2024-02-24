import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the stocks page
        navigate("/stocks"); // Assuming "/stocks" is the path to stocks.js
    };

    return (
        <button className="home" onClick={handleClick}>Open</button>
    );
}

export default Home;
