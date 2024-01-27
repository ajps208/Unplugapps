import React from 'react'
import InsertData from './InsertData'
import { useSelector } from 'react-redux';
import { addFormData } from '../Services/allApi';

function Buttons() {
  const data = useSelector((state) => state.formSlice.formData);
  const formtotal = useSelector((state) => state.formSlice.formTotal);
  const handlesave = async () => {
    const { vrNo, date, status, acName } = data;
    if (vrNo === "" || date === "" || status === "" || acName === "" || formtotal === "") {
      alert("Please fill in all fields");
    } else {
      const body = {
        vr_no: vrNo,
        vr_date: date,
        ac_name: acName,
        status: status,
        ac_amt: formtotal,
      };
      const result = await addFormData(body);
    }
  };
  
  return (
   <>
        <button onClick={() => window.location.reload(true)} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        NEW
      </button>
      
      <InsertData />
      <button onClick={handlesave} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        SAVE
      </button>
      <button onClick={()=>window.print()} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       PRINT
      </button>
   </>
  )
}

export default Buttons