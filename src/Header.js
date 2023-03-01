import React from "react";
import './Header.css';
import { Select,CryptoLogos } from "@web3uikit/core";
import typeTab from "./db/type-tab.json"
import {List} from '@web3uikit/icons'


function Header(props) {
    return (
        <div className="Header" >
            <h1 style={{ textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: '100px' }}>DAPP PORTAL</h1>
            <h2 style={{ textAlign: "left", padding: '0 16px', boxSizing: "border-box", fontSize: "50px" }}>Your gateway into the Dapp ecosystem</h2>
            <div style={{ display: "flex", marginTop: '20px', marginLeft: '20px', flexWrap: 'wrap' }}>
                {
                    typeTab.map(item => (
                        <Select
                            style={{marginLeft: '60px', marginTop: '20px'}}
                            defaultOptionIndex={0}
                            id="Select"
                            label={item.name}
                            onBlurTraditional={function noRefCheck(opt) { }}
                            onChange={(option) => {
                                console.log('option',option)
                                console.log('itemName', item.name)
                                props.onItemClick(option, item.name)
                            }}
                            onChangeTraditional={function noRefCheck() { }}
                            options={[
                                {
                                    id: 'All',
                                    label: 'All',
                                    prefix: <List fontSize='50px'/>
                                },
                                {
                                    id: 'ethereum',
                                    label: 'ethereum',
                                    prefix: <CryptoLogos
                                        chain="ethereum"
                                        onClick={function noRefCheck(){}}
                                        size="30px"
                                    />
                                },
                                {
                                    id: 'binance',
                                    label: 'binance',
                                    prefix: <CryptoLogos
                                        chain="binance"
                                        onClick={function noRefCheck(){}}
                                        size="30px"
                                    />
                                },
                                {
                                    id: 'polygon',
                                    label: 'polygon',
                                    prefix: <CryptoLogos
                                        chain="polygon"
                                        onClick={function noRefCheck(){}}
                                        size="30px"
                                    />
                                },
                                {
                                    id: 'arbitrum',
                                    label: 'arbitrum',
                                    prefix: <CryptoLogos
                                        chain="arbitrum"
                                        onClick={function noRefCheck(){}}
                                        size="30px"
                                    />
                                },
                                {
                                    id: 'optimism',
                                    label: 'optimism',
                                    prefix: <CryptoLogos
                                        chain="optimism"
                                        onClick={function noRefCheck(){}}
                                        size="30px"
                                    />
                                },
                            ]}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Header;
