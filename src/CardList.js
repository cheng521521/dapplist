import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./CardList.css"
import { Card, Illustration } from "@web3uikit/core";
import swap from './db/swap-dapp.json'
import cex from './db/cex-dapp.json'

function CardList(props, ref) {
    useImperativeHandle(ref, () => ({
        filterList
    }))
    const [list, setList] = useState(swap);

    const filterList = (key, type) => {
        let newList = [];
        switch (type) {
            case "Swapping":
                newList = fliterKeyList(key, swap)
                break;
            case "Cex":
                newList = fliterKeyList(key, cex)
                break;
            case "Dex":
                newList = fliterKeyList(key, cex)
                break;
        }
        setList(newList)

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
function fliterKeyList(key, list)  {
    console.log("key is", key)
    if (key.toLowerCase() === 'All'.toLowerCase()) {
        console.log("list is", list)
        return list;
    } else {
        list = list.filter(item => {
            return item.tag.includes(key)
        })
        console.log("list is", list)
    }
    return list;
}
export default forwardRef(CardList);