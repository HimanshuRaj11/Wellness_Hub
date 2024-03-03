import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Server_URL = "http://localhost:8000"
import cookies from "js-cookie"
// const Server_URL = import.meta.env.VITE_SERVER_URL;


export const DoctorsSlice = createSlice({
  name: "Doctors",
  initialState: {
    Doctors: [],
    loading: false,
    error: null,
    
  },
   reducers:{ },
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchAllDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.Doctors = action.payload;
      })
      .addCase(FetchAllDoctor.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const FetchAllDoctor = createAsyncThunk("Fetch/doctor", async()=>{
try {
  const res = await axios.get(`${Server_URL}/doctor/api/v1/fetch-all-doctor`, {withCredentials:true});
  const data = res.data.Doctors;
  return data;
} catch (error) {
  return error.message;
}
})


export default DoctorsSlice.reducer;