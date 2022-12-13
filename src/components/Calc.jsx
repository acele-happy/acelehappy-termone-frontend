import React from "react";
import "./Calc.css"
import axios from 'axios'
import { useState } from "react";

const Calc = ()=>{
        
    const [operator1,setOperator1] = useState(0)
    const [operator2,setOperator2]=useState(0)
    const [operation,setOperation] = useState("")
    const [result,setResult] = useState("")

    // onChange = (e) => {
    //     setOperator1(e.target.value)
    //     onChange = (e) => {
    //         this.setState({ [e.target.name]: e.target.value });
    //       };
        
    //   };
    
    const data = {
        operator1: operator1,
        operator2: operator2,
        operation: operation
    }

    const doMath = ()=>{
        axios.post("http://localhost:4040/api/calc",data)
        .then((res)=>{
            console.log("heeree")
            console.log(res.data)
            setResult(res.data)
        })
        .catch((ex)=>{
            console.log("Error in doMAth react!")
            
        })
    }

    // const onChange=(e)=>{
    //     setOperator1(e.target.value)
    //     console.log(operator1)
    // }
 

    return(
        <div className="container">
            <div className="left">
                <input type="number" name="operator1" id="operator1" placeholder="Enter an Operator" onChange={(e)=>{setOperator1(e.target.value);}}/>
                <input type="number" name="operator2" id="operator2" placeholder="Enter another Operator" onChange={(e)=>{setOperator2(e.target.value)}}/>
                <input type="text" name="operation" id="operation" placeholder="* / + -" onChange={(e)=>{setOperation(e.target.value);}}/>
                <button onClick={doMath}>DoMath!</button>
            </div>
            <div className="right">
                <h3>Result</h3>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Calc