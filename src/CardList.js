import React from "react";
import "./CardList.css"
import {Card, Illustration} from "@web3uikit/core";
import dblist from './db/swap-dapp.json'
function CardList() {
    return (
        <div className="cardlist" style={{justifyContent: "space-around",overflow: 'hidden'}}>
            <div className="container" style={{display: 'flex', boxSizing: "border-box", marginBottom: '10px', width: '100%', maxWidth: "100%", flexWrap: 'wrap'}}>
                {
                    dblist.map(item => (
                        <div style={{width: '250px', marginLeft: '80px', marginTop: '50px'}}>
                            <Card
                                description="Click to create a dApp"
                                isSelected
                                onClick={function noRefCheck(){}}
                                setIsSelected={function noRefCheck(){}}
                                title={item.name}
                                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid"
                            >
                                <div>
                                    <Illustration
                                        height="180px"
                                        logo="servers"
                                        width="100%"
                                    />
                                </div>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardList;