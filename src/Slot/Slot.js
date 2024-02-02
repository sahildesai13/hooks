import React, { useState } from 'react';
import './Slot.css';

function Slot() {
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [slots, setSlots] = useState([]);

//   const generateSlots = () => {
//     const [startHour, startMinute] = startTime.split(':').map(Number);
//     const [endHour, endMinute] = endTime.split(':').map(Number);

//     const startMinutes = startHour * 60 + startMinute;
//     const endMinutes = endHour * 60 + endMinute;

//     if (!isNaN(startMinutes) && !isNaN(endMinutes) && endMinutes > startMinutes) {
//       const totalDuration = endMinutes - startMinutes;
//       const totalSlots = Math.ceil((totalDuration / 60) * 6);

//       const generatedSlots = Array.from({ length: totalSlots }, (_, index) => ({
//         number: index + 1,
//       }));

//       setSlots(generatedSlots);
//     } else {
//       alert('Invalid input. Please make sure the end time is after the start time.');
//     }
//   };

//   return (
//     <div className="SlotBox">
//       <h1>Time Slot Generator</h1>
//       <div className='d-flex'> 
//         <span className='slotSpan'>Start Time:</span>
//         <input type="text" value={startTime}  onChange={(e) => setStartTime(e.target.value)} placeholder="HH:MM"/>
//       </div>
//       <div className='d-flex'>
//         <span className='slotSpan'>End Time:</span>
//         <input type="text" value={endTime}  onChange={(e) => setEndTime(e.target.value)} placeholder="HH:MM"/>
//       </div>
//       <button onClick={generateSlots}>Generate Slots</button>
//       <div>
//         <h2>Total Slots Generated:</h2>
//         <p>{slots.length}</p>
//       </div>
//       <div>
//         <h2>Generated Slots:</h2>
//         <ul className='SlotList'>
//           {slots.map((slot) => (
//             <li key={slot.number}> Slot : {slot.number}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// --------------------------------------------------------------------------

let [set, sset] = useState();
let [aset, asset] = useState();
let [ans, setans] = useState([]);
let array = [];
let array1 = [];
let slotearry = [];
let h, m;
let hslot, mslot, tslot, data,data1;

const slot = () => {
  array = set.split(':');
  array1 = aset.split(':');
  data = array[1];
  if (parseInt(array[0]) > parseInt(array1[0])) {

    h = parseInt(array[0]) - parseInt(array1[0]);
    h = 12 - h;
    if (parseInt(array[0]) == parseInt(array1[0])) {
      h = 0;
    }
  } else {
    h = (parseInt(array1[0]) - parseInt(array[0]));
  }
  m = Math.abs(array1[1] - array[1]);
  hslot = (h * 6);
  mslot = (m / 10);
  tslot = mslot + hslot;

  if(tslot%2!=0){
   if(array[1]<array1[1]){
      tslot=tslot+1;
    }

  }
  for (var i = 0; i <= tslot; i++) {
    data1=array[1];
    slotearry[i] = array[0] + ":" + array[1];

    if (array[0] == 12) {
      array[0] = 1;
    }

    array[1] = parseInt(array[1]) + parseInt(10);
     
    if (array[1] >= 60) {
      array[1] = array[1] - 60;
      array[0] = parseInt(array[0]) + parseInt(1);
      if (array[1] <= 9) {
        array[1] = "0" + array[1];
      }

    }
  }

  setans(slotearry);
}

return (
  <>
    <input type="text" placeholder="Enter Time" onChange={(e) => sset(e.target.value)}></input><br></br>
    <input type="text" placeholder="Enter Time" onChange={(e) => asset(e.target.value)}></input>
    <input type='button' value="slot" onClick={slot}></input>
    <table border={1}>
      <thead>
        <tr>
          <th>Total Slots</th>
        </tr>
      </thead>
      <tbody>
        {
          ans.map((ele, ind) => {
            return (
              <tr>
                <td >{ele}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </>
);

 }

export default Slot;
