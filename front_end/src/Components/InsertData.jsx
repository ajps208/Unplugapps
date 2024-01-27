import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addTableData } from "../Services/allApi";
import { setUpdateState } from "../Redux/formSlice";

function InsertData() {
    const [show, setShow] = useState(false);
    const data = useSelector((state) => state.formSlice.formData);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      vrNo:"",
      srNo: "",
      itemCode: "",
      itemName: "",
      qty: "",
      rate: "",
      amount: "",
    });
    const [itemDetails, setItemDetails] = useState([]);
    const [error, setError] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
      setFormData((prevData) => ({
        ...prevData,
        vrNo: data.vrNo
      }));
    }, [data.vrNo]); 
    
    useEffect(() => {
      axios
        .get("http://5.189.180.8:8010/item")
        .then((response) => {
          const items = response.data;
          setItemDetails(items);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      let updatedFormData = { ...formData, [id]: value };
      if (id === "qty" || id === "rate") {
        const qty = id === "qty" ? value : formData.qty;
        const rate = id === "rate" ? value : formData.rate;
        updatedFormData = { ...updatedFormData, amount: qty * rate };
      }
  
      setFormData(updatedFormData);
    };
  
    const handleAddData = async() => {
      const { srNo, itemCode, itemName, qty, rate } = formData;
      if (!srNo || !qty || !rate) {
        setError("Please fill all the fields.");
      } else {
        setError("");
        const result=await addTableData(formData)
        if(result.status===200){
        dispatch(setUpdateState());
        alert("data added successfully!!!!!!!")}
        formData.itemCode=""
        formData.itemName=""
        formData.qty=""
        formData.rate=""
        formData.srNo=""
        formData.amount=""
        handleClose()
      }
    };
  
    return (
      <>
        <Button  style={{backgroundColor:"#42a5f5"}} onClick={handleShow}>
          INSERT
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>INSERT DATA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          {data.vrNo && data.date && data.status && data.acName &&  (
           <form className="w-full">
           <div className="flex flex-wrap">
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="srNo"
                 className="block text-sm font-medium text-gray-700"
               >
                 Sr No
               </label>
               <input
                 id="srNo"
                 type="number"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full"
                 placeholder="Enter Sr No"
                 value={formData.srNo}
                 onChange={handleInputChange}
               />
             </div>
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="itemCode"
                 className="block text-sm font-medium text-gray-700"
               >
                 Item Code
               </label>
               <select
                 id="itemCode"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700"
                 value={formData.itemCode}
                 onChange={handleInputChange}
               >
                 <option value="">Select Item Code</option>
                 {itemDetails.map((item) => (
                   <option key={item.item_code} value={item.item_code}>
                     {item.item_code}
                   </option>
                 ))}
               </select>
             </div>
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="itemName"
                 className="block text-sm font-medium text-gray-700"
               >
                 Item Name
               </label>
               <select
                 id="itemName"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700"
                 value={formData.itemName}
                 onChange={handleInputChange}
               >
                 <option value="">Select Item Name</option>
                 {itemDetails.map((item) => (
                   <option key={item.item_code} value={item.item_name}>
                     {item.item_name}
                   </option>
                 ))}
               </select>
             </div>
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="qty"
                 className="block text-sm font-medium text-gray-700"
               >
                 Qty
               </label>
               <input
                 id="qty"
                 type="number"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full"
                 placeholder="Enter Qty"
                 value={formData.qty}
                 onChange={handleInputChange}
               />
             </div>
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="rate"
                 className="block text-sm font-medium text-gray-700"
               >
                 Rate
               </label>
               <input
                 id="rate"
                 type="number"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full"
                 placeholder="Enter Rate"
                 value={formData.rate}
                 onChange={handleInputChange}
               />
             </div>
             <div className="w-1/4 mb-4 px-2">
               <label
                 htmlFor="amount"
                 className="block text-sm font-medium text-gray-700"
               >
                 Amount
               </label>
               <input
                 id="amount"
                 type="text"
                 className="input-field border border-gray-300 rounded-md px-3 py-2 w-full"
                 value={formData.amount}
                 readOnly
               />
             </div>
           </div>
           
         </form>
          )}
        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddData}>
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default InsertData;
  