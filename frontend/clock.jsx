import React from "react"
import Tabs from "./tabs"

class Clock extends React.Component{
    constructor(props){
        super(props)
        let date = new Date()
        this.state = {time: date}
        this.tick = this.tick.bind(this)
    }
    componentDidMount(){
        this.currentTime = setInterval(this.tick, 1000)
    }

    tick(){
        let date = new Date()
        this.setState({time: date})
    }
    

    render(){

        return(
            <div>
                <section id="title">Clock</section>
                <div className="box">
                    <h1 className="clock">Time: &nbsp; &nbsp; &nbsp; &nbsp;{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
                    <h1 className="clock">Date: &nbsp; &nbsp; &nbsp; &nbsp;{this.state.time.toDateString()} </h1>
                </div>
            </div>
        )
    }
}

export default Clock;