import './App.css';
import Title from "./Title";
import Header from "./Header";
import CardList from "./CardList";
import {useRef} from "react";

function App() {
    let cardList = useRef(null);
    const headerClick = (itemData) => {
        console.log('itemData', itemData);
        cardList.current.filterList(itemData)
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
