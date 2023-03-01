import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./CardList.css"
import { Card, Illustration } from "@web3uikit/core";
import swap from './db/swap-dapp.json'
import cex from './db/cex-dapp.json'

function CardList(props, ref) {
    useImperativeHandle(ref, () => ({
        filterList
    }))
    let list = swap;
    const filterList = (data, type) => {
        switch (type) {
            case "swap":
                [list, setList] = useState(swap)
                console.log('typeCard', type)
                console.log('filterList', data);
                console.log('dblist', swap);
                let newList = [];
                console.log(data.toLowerCase() === 'All'.toLowerCase())
                if (data.toLowerCase() === 'All'.toLowerCase()) {
                    newList = swap
                } else {
                    newList = swap.filter(swap => {
                        return swap.tag.includes(data)
                    })
                }
                console.log(newList)
                setList(newList)
        }

    }

    return (
        <div className="cardlist" style={{ justifyContent: "space-around", overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', boxSizing: "border-box", marginBottom: '10px', width: '100%', maxWidth: "100%", flexWrap: 'wrap' }}>
                {
                    list.map(item => (
                        <div style={{ width: '250px', marginLeft: '80px', marginTop: '50px' }}>
                            <Card
                                description="Click to create a dApp"
                                isSelected
                                onClick={function noRefCheck() { window.open(item.url) }}
                                setIsSelected={function noRefCheck() { }}
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

export default forwardRef(CardList);