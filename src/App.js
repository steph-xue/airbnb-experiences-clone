import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
    const cardElements = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        );
    });  
    
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cardElements}
            </div>
        </div>
    );
}

export default App;