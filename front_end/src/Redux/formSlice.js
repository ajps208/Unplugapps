import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    formData: {
      vrNo: "",
      date: "",
      status: "",
      acName: "",
      acAmnt: ""
    },
    updatestate:false,
    formTotal:0
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
   
    setUpdateState: (state) => {
      state.updatestate =!state.updatestate
    },
    setFormTotal: (state,action) => {
      state.formTotal = action.payload;
    },
  },
});

export const {setFormData,setUpdateState,setFormTotal} = formSlice.actions;
export default formSlice.reducer;
