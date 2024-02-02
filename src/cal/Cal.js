import { useState } from 'react';
import './Cal.css'
function Cal() {
    let [val, setvel] = useState("");
    let [val1, setvel1] = useState('');
    let [ans, setans] = useState('');

    const datAdd = () => setans(parseInt(val) + parseInt(val1));
    const dataSub = () => setans(parseInt(val) - parseInt(val1));
    const dataMul = () => setans(parseInt(val) * parseInt(val1));
    const dataDiv = () => setans(parseInt(val) / parseInt(val1));
    return (
        <div className='CalBox'>
            <h2>The Simple Calculator</h2>
            <input type="text" onChange={(e) => { setvel(e.target.value) }} placeholder='enter value 1' /><br/>
            <input type="text" onChange={(e) => { setvel1(e.target.value) }} placeholder='enter value 2' /><br />
            <input type="text" value={ans} placeholder='Answer' readOnly /><br />
            <button onClick={datAdd} id='b1'>SUM </button>
            <button onClick={dataSub} id='b2'>SUB </button><br/>
            <button onClick={dataMul} id='b3'>MUL </button>
            <button onClick={dataDiv} id='b4'>DIV </button>
        </div>
    );
}
export default Cal;