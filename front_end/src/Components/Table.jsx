import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTableData, vrNoGetTableDetailes } from "../Services/allApi";
import { setFormTotal, setUpdateState } from "../Redux/formSlice";
import './Table.css'

function Table() {
  const [tableDetailes, setTableDetailes] = useState([]);
  const data = useSelector((state) => state.formSlice.formData);
  const updatestate = useSelector((state) => state.formSlice.updatestate);
  const formtotal = useSelector((state) => state.formSlice.formTotal);
  const dispatch=useDispatch()

  const getTableDetailesForVrNo = async () => {
    const result = await vrNoGetTableDetailes(data.vrNo);
    if (result.status === 200) {
      setTableDetailes(result.data);

      // Calculate total amount
      const total = result.data.reduce((acc, curr) => acc + curr.amount, 0);
      dispatch(setFormTotal(total))
    }
  };
//   deletedata
const handledatadelete =async (vrno, srno) => {
    const body={vrno,srno}
    const result= await deleteTableData(body)
    if(result.status===200){
        alert("data deleted successfully!!!!")
        dispatch(setUpdateState());

    }
}

  useEffect(() => {
    if (data.vrNo !== "") {
      getTableDetailesForVrNo();
    }
  }, [data.vrNo, updatestate]);

  return (
   <>
      <div  className=" w-full text-center rounded-sm P-2 text-xl bg-red-200">DETAILS</div>
  
      <table className="table-auto w-full rounded-sm border-collapse border-2 border-black">
        <thead>
          <tr>
            <th className="border-2 border-black">Sr NO</th>
            <th className="border-2 border-black">Item Code</th>
            <th className="border-2 border-black">Item Name</th>
            <th className="border-2 border-black">Qty</th>
            <th className="border-2 border-black">Rate</th>
            <th className="border-2 border-black">Amount</th>
            <th className="hide-on-print border-2 border-black"></th>
          </tr>
        </thead>
        <tbody>
          {tableDetailes && tableDetailes.length > 0 ? (
            tableDetailes.map((row, index) => (
              <tr key={index}>
                <td className="border-2 border-black">{row.sr_no}</td>
                <td className="border-2 border-black">{row.item_code}</td>
                <td className="border-2 border-black">{row.item_name}</td>
                <td className="border-2 border-black">{row.qty}</td>
                <td className="border-2 border-black">{row.rate}</td>
                <td className="border-2 border-black">{row.amount}</td>
                <td className="border-2 border-black">
                  <i onClick={()=>handledatadelete(row.vr_no,row.sr_no)} className="hide-on-print fa-solid fa-trash text-red-600"></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border-2 border-black">
                {tableDetailes ? "No data available" : "Please enter the details"}
              </td>
            </tr>
          )}
        </tbody>
  
        <tfoot>
          <tr>
            <td className="border-2 border-black" colSpan="5">
              Total:-
            </td>
            <td className="border-2 border-black red">{formtotal}</td>
          </tr>
        </tfoot>
      </table>
   </>
  );
}

export default Table;
