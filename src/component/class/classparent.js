import React,{Component} from 'react'
import Classchild from './classchild.js'
class Classparent extends Component{
    render(){
        const a="Reshmi"
        const object={
            age:23
        }
        const array=[1,2,3,4,5]
        return(
            <div>
                <Classchild name={a} obj={object} arr={array}/>
            </div>
        )
    }
}

export default Classparent