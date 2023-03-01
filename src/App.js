import './App.css';
import Title from "./Title";
import Header from "./Header";
import CardList from "./CardList";
import {useRef} from "react";

function App() {
    let cardList = useRef(null);
    const headerClick = (itemData, type) => {
        console.log('itemDataId', itemData.id);
        console.log('type', type)
        cardList.current.filterList(itemData.id, type)
    }
    return (
        <div className="App" style={{height: '100vh', background: "#edf7ff", overflowY: 'auto'}}>
            <Title/>
            <Header onItemClick={headerClick}/>
            <CardList ref={cardList}/>
        </div>
    );
}

export default App;
