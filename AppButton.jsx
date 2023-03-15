import React from "react"
import { Component } from "react"

class AppButton extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    changeNumber=()=>{
        this.setState({count:this.state.count+1})
    }
    changeNum=()=>{
        this.setState({count:this.state.count-1})
    }
    resetting=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.changeNumber}>+ Increamet</button>
            <button onClick={this.changeNum}>- Decreament</button>
            <button onClick={this.resetting}>reset</button>
            </>
        )
    }
}
export default AppButton