import React from "react";
import './Header.css';
import { Select } from "@web3uikit/core";

function Header() {
    return (
        <div className="Header" >
            <h1 style={{ textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: '100px' }}>DAPP PORTAL</h1>
            <h2 style={{ textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: "50px" }}>Your gateway into the Dapp ecosystem</h2>
            <div style={{ display: "flex", marginTop: '20px', marginLeft: '20px' }}>
                <Select
                style={{ zIndex: '7'}}
                    defaultOptionIndex={0}
                    id="Select"
                    label="Choose your network"
                    onBlurTraditional={function noRefCheck() { }}
                    onChange={function noRefCheck() { }}
                    onChangeTraditional={function noRefCheck() { }}
                    options={[
                        {
                            id: 'emoji',
                            label: 'Emoji',
                            prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
                        },
                        {
                            id: 'emoji',
                            label: 'Emoji',
                            prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
                        },
                    ]}
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