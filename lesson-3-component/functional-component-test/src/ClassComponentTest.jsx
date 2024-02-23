import React, {Component} from "react";

export default class ClassComponentTest extends Component{
    handleClick = () =>{
        console.log("Hello world");
    };

    render(){
        const greeting = "Hello C08, Welcome to Class Component";
        return(
            <>
            <Headline value={greeting} name= {"Tèo Nguyễn"}/>
            <button onclick = {this.handleClick}>Click me</button>
            </>
        )
    }
}

class Headline extends Component{
    render(){
        const {id,name} = this.props;
        return (
            <>
            <h2>{id}</h2>
            <h2>{name}</h2>
            </>
        )
    }
}