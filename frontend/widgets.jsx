import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock"
import Tabs from "./tabs"

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById("root")
    
    
    ReactDOM.render(<Root/>, root)
})

function Root(){
    const titles = [{
        title: 'one',
        content: 'coolbeans'
    }, {
        title: 'two',
        content: 'coolbeans2'
    }, {
        title: 'three',
        content: 'coolbeans3'
    }]
    return (
    <h1>
         <Clock/>
         <Tabs titles={titles}/>
    </h1>)
}

export default Root;