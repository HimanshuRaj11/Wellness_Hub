import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Server_URL = "http://localhost:8000"
import cookies from "js-cookie"
// const Server_URL = import.meta.env.VITE_SERVER_URL;


export const DoctorSlice = createSlice({
  name: "Doctor",
  initialState: {
    User: {},
    loading: false,
    error: null,
    
  },
   reducers:{ },
  extraReducers: (builder) => {
    builder
      .addCase(FetchDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.User = action.payload;
      })
      .addCase(FetchDoctor.rejected, (state) => {
        state.loading = false;
      })
  },
});
export const RegisterDoctor = createAsyncThunk("Register/Doctor", async ({formData}) => {
  try {
    const res = await axios.post(`${Server_URL}/doctor/api/v1/register`,{formData}, {withCredentials:true});
    const data = res.data.user;
    return data;
} catch (error) {
    return error.message;
}
});
export const LoginUser = createAsyncThunk("login/doctor", async ({formData,navigate}) => {
    try {
        const res = await axios.post(`${Server_URL}/doctor/api/v1/login`, {formData},{withCredentials:true});
        navigate('/')
        const data = res.data.user;
    return data;
  } catch (error) {
    return error.message;
  }
});

export const FetchDoctor = createAsyncThunk("Fetch/doctor", async()=>{
try {
  const res = await axios.get(`${Server_URL}/doctor/api/v1/fetch-user`, {withCredentials:true});
  const data = res.data.user;
  return data;
} catch (error) {
  return error.message;
}
})
export const LogoutDoctor = createAsyncThunk("Logout/Doctor", async({navigate})=>{
try {
  const res = await axios.get(`${Server_URL}/doctor/api/v1/logout-doctor`, {withCredentials:true});
  const data = res.data;
  navigate("/register");
  return data;
} catch (error) {
  return error.message;
}
})

export default DoctorSlice.reducer;