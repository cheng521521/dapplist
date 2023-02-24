import './App.css';
import Title from "./Title";
import Header from "./Header";
import CardList from "./CardList";

function App() {
    return (
        <div className="App" style={{height: '100vh', background: "#edf7ff", overflowY: 'auto'}}>
            <Title/>
            <Header/>
            <CardList/>
        </div>
    );
}

export default App;
