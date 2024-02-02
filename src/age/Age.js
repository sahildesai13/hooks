import { useState } from 'react';
import './Age.css';
function Age () {
    var [Dob,setDob] = useState('');
    var [today,setToday] = useState('');
    var [AgeData,setAgeData] = useState('');

    const AgeCal = ()=>{
        var DobDate = new Date(Dob);
        var todayDate = new Date(today);
        const MiliSec = todayDate - DobDate;
        const Sec = MiliSec / 1000;
        const Min = Sec / 60;
        const Hours = Min / 60;
        const Days = Hours / 24;
        const Week = Math.floor(Days / 7);
        const Month  = (todayDate.getMonth() - DobDate.getMonth()) + (12 * (todayDate.getFullYear() - DobDate.getFullYear()));
        const Years = Math.floor(Month /12);

        setAgeData({Years,Month,Week,Days,Hours,Min,Sec,MiliSec});
    }
 
  return (
    <div>
      <div className='box1' style={{background:'white'}}>
        <div>
          <h1>Age Calculator</h1>
        </div>
        <div className='Row'>
          <span>Enter DOB :</span>
          <input type='date' min='2000-01-01' max='2005-12-31' onChange={(e)=>{setDob(e.target.value)}} />
        </div>
        <div className='Row'>
          <span>Enter Today :</span>
          <input type='date' onChange={(e)=>{setToday(e.target.value)}} />
        </div>
        <button className='AgeBtn' onClick={()=>{AgeCal()}}>Click To Get Age</button>
      </div>
      <table className="box2" >
      <thead>
        <tr >
            <th colSpan={2}><h2>You Already Lived...!</h2></th>
        </tr>     
      </thead>
        <tbody>
            <tr>
                <td>Years :</td>
                <td>{AgeData.Years}</td>
            </tr>
            <tr>
                <td>Month :</td>
                <td>{AgeData.Month} </td>
            </tr>
            <tr>
                <td>Weeks :</td>
                <td>{AgeData.Week}</td>
            </tr>
            <tr>
                <td>Days :</td>
                <td>{AgeData.Days}</td>
            </tr>
            <tr>
                <td>Hours :</td>
                <td>{AgeData.Hours}</td>
            </tr>
            <tr>
                <td>Minutes :</td>
                <td>{AgeData.Min}</td>
            </tr>
            <tr>
                <td>Seconds :</td>
                <td>{AgeData.Sec}</td>
            </tr>
        </tbody>
        
      </table>
    </div>
  )
}
export default Age
