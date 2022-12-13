import React from "react";
import "./Calc.css"

const Calc = ()=>{
    return(
        <div className="container">
            <div className="left">
                <input type="number" name="operator1" id="operator1" placeholder="Enter an Operator"/>
                <input type="number" name="operator2" id="operator2" placeholder="Enter another Operator"/>
                <input type="text" name="operation" id="operation" placeholder="* / + -"/>
                <button>DoMath!</button>
            </div>
            <div className="right">
                <h3>Result</h3>
                <span></span>
            </div>
        </div>
    )
}

export default Calc