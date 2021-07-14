import React from "react";


export default class Counter extends React.Component {
    constructor(props){
        super(props);
    this.state = {counter:0};
}
 
render(){
    return (
        <p>{this.state.counter}</p>
    )
}
}