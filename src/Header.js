import React from "react";
import './Header.css';
import {Autocomplete, TextField} from "@mui/material";

function Header() {
    return (
        <div className = "Header" >
            <h1 style={{textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: '100px'}}>DAPP PORTAL</h1>
            <h2 style={{textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: "50px"}}>Your gateway into the Dapp ecosystem</h2>
            <div style={{display: "flex", marginTop: '20px', marginLeft: '20px'}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={blockchain}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="swap" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={blockchain}
                sx={{ width: 300 }}
                style={{marginLeft: '16px'}}
                renderInput={(params) => <TextField {...params} label="Centralized Exchanges" />}
            />
            </div>
        </div>
    )
}

export default Header;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const blockchain = [
    { label: 'all', id: 'all' },
    { label: 'eth', id: 'eth' },
];