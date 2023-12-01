import React,{Component} from "react";

class Classchild extends Component{
    render(){
        let value=this.props
        return(
            <div>
                <h1>Passing values using props in class component</h1>
                <h4>1)name</h4>
                <p>{value.name}</p>
                <h4>2)object</h4>
                <p>{value.obj.age}</p>
                <h4>3)array</h4>
                <p>{value.arr[2]}</p>
            </div>
        )
    }
}

export default Classchild