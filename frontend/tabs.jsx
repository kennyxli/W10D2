import React from "react"
import Root from "./widgets"

class Tabs extends React.Component{
    constructor(props){
        super(props)
       this.state = {index: 0} 
       this.handleClick = this.handleClick.bind(this)
    }

    handleClick(idx){
        this.setState({
            index: idx
        })
       
    }
    

    render(){
        const {titles} = this.props
        return(
            <div>
            <header className="tabHead">Tabs</header>
            <ul className="tab">
                {titles.map ((title,idx) =>{
                    {if (idx === this.state.index){
                        return <li className= "title" key={idx} onClick={() => this.handleClick(idx)}>
                            {title.title}
                            <div className="body">
                            <content className="content"> {title.content}</content>
                            </div>
                        </li>
                    }
                    else{
                        return <li className= "title" key={idx} onClick={() => this.handleClick( idx)}>{title.title}</li>
                    }
                    }

                    
                })}
            </ul>
            </div>
        )
    }
} 

export default Tabs;