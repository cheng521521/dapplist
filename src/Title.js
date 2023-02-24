import React from "react";
import './Title.css';

function Title() {
    return (
        <div className = "Title" style={{backgroundColor: '#edf7ff',position: "sticky", top: 0, zIndex: 7}}>
            <h1 style={{fontSize: '40px'}}>DappList</h1>
        </div>
    )
}

export default Title;