import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../Redux/formSlice';

function Form() {
    const formtotal = useSelector((state) => state.formSlice.formTotal);
    const data = useSelector((state) => state.formSlice.formData);

    const [formdata, setFormdata] = useState({
        vrNo: "",
        date: "",
        status: "",
        acName: "",
        acAmnt: ""
    });
    const [vrNoError, setVrNoError] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFormData(formdata));
    }, [formdata, dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validation for Vr No
        if (name === "vrNo") {
            if (!/^\d+$/.test(value)) {
                setVrNoError("Please enter numbers only.");
            } else {
                setVrNoError("");
            }
        }

        setFormdata({
            ...formdata,
            [name]: value
        });
    };

    // console.log(data);
     
    return (
       <>
            <div className='w-full bg-blue-100 rounded-md shadow-md text-center text-xl p-2'>Header</div>
    
            <form className="bg-blue-200 p-8 rounded-md shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/4">
                        <label
                            htmlFor="vr-no"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Vr NO:-
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            id="vr-no"
                            name="vrNo"
                            value={formdata.vrNo}
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                        />
                        {vrNoError && <span className="text-red-500">{vrNoError}</span>}
                    </div>
                    <div className="w-1/4">
                        <label
                            htmlFor="vr-date"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Vr Date:-
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="date"
                            id="vr-date"
                            name="date"
                            value={formdata.date}
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/4">
                        <label
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Status
                        </label>
                        <select
                            onChange={handleInputChange}
                            id="status"
                            name="status"
                            value={formdata.status}
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                        >
                            <option value="">select status</option>
                            <option value="A">A</option>
                            <option value="I">I</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-1/4">
                        <label
                            htmlFor="ac-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Ac Name:
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            id="ac-name"
                            name="acName"
                            value={formdata.acName}
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/4">
                        <label
                            htmlFor="ac-amt"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Ac Amt
                        </label>
                        <input
                            type="number"
                            id="ac-amt"
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                            value={formtotal}
                            readOnly
                        />
                    </div>
                </div>
            </form>
       </>
    );
}

export default Form;
