import { useState } from 'react';
import './Calculator.css';
function Calculator() {
    let [val,setVal] = useState(0);
    let [val1,setVal1] = useState(0);
    let [operator, setOperator] = useState(null);


    function sum(){
        setVal1(parseInt(val1)+parseInt(val))
        setVal(0)
    }
    function sub(){
        setVal1(parseInt(val))
        setVal(0)
    }
    function div(){
        setVal1(parseInt(val))
        setVal(0)
    }
    function mul(){
        setVal1(parseInt(val))
        setVal(0)
    }

    const dispClear = ()=>{
        setVal(0);
        setVal1(0);
        setOperator(null)
    }
    const result = () =>{
        if (operator === '+'){
            sum()
            setVal1(parseInt(val)+parseInt(val1));
            setVal(0);
        }
         else if (operator === '-'){
            setVal1(parseInt(val1)-parseInt(val));
            setVal(0);
        }
         else if (operator === '/'){
            if(+val !== 0){
                setVal1(parseInt(val1)/parseInt(val));
                setVal(0);
            }else {
                setVal('Cannot divide by zero!');
            }
        }
        else if (operator === 'x'){
            setVal1(+val1*parseInt(val));
            setVal(0);
        }
    }

    const del = () => {
        const str = String(val);
        const newStr = str.substring(0, str.length - 1);
        setVal(+newStr || 0);
    };

    return(
        <div>
            <h1>This is real Calculator</h1>
            <div className='cal'>
                <div className="dispBox">
                <input type="text" onChange={(e)=>{setVal(e.target.value)}} value={val} className='disp' id='d1'/>
                <input type="number"  className='disp' value={val1} id='d2' />
                </div>

                <div className="box" >
                    <div className="row">
                        <button className='zero BtnG' onClick={dispClear}>c</button>
                        <button className='zero BtnG' onClick={del}>{'<'}</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>{setVal((val)+('9'))}}>9</button>
                        <button onClick={()=>{setVal((val)+('8'))}}>8</button>
                        <button onClick={()=>{setVal((val)+('7'))}}>7</button>
                        <button className='BtnY' onClick={()=>{{div()}setOperator('/')}}>÷</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>{setVal((val)+('6'))}}>6</button>
                        <button onClick={()=>{setVal((val)+('5'))}}>5</button>
                        <button onClick={()=>{setVal((val)+('4'))}}>4</button>
                        <button className='BtnY' onClick={()=>{{mul()}setOperator('x')}}>x</button>

                    </div>
                    <div className="row">
                        <button onClick={()=>{setVal((val)+('3'))}}>3</button>
                        <button onClick={()=>{setVal((val)+('2'))}}>2</button>
                        <button onClick={()=>{setVal((val)+('1'))}}>1</button>
                        <button className='BtnY' onClick={()=>{{sub()}setOperator('-')}}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>{setVal((val)+('0'))}} className='zero'>0</button>
                        <button className='BtnY' onClick={result}>=</button>
                        <button className='BtnY' onClick={ ()=>{{sum()}setOperator('+')}}>+</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Calculator;