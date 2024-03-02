import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Server_URL = "http://localhost:8000"
import cookies from "js-cookie"
// const Server_URL = import.meta.env.VITE_SERVER_URL;


export const UserSlice = createSlice({
  name: "User",
  initialState: {
    User: {},
    loading: false,
    error: null,
    
  },
   reducers:{ },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.User = action.payload;
      })
      .addCase(FetchUser.rejected, (state) => {
        state.loading = false;
      })
  },
});
export const RegisterUser = createAsyncThunk("Register/User", async ({formData}) => {
  try {
    const res = await axios.post(`${Server_URL}/user/api/v1/register`,{formData}, {withCredentials:true});
    const data = res.data.user;
    return data;
} catch (error) {
    return error.message;
}
});
export const LoginUser = createAsyncThunk("login/User", async ({formData,navigate}) => {
    try {
        const res = await axios.post(`${Server_URL}/user/api/v1/login`, {formData},{withCredentials:true});
        navigate('/')
        const data = res.data.user;
    return data;
  } catch (error) {
    return error.message;
  }
});

export const FetchUser = createAsyncThunk("Fetch/User", async()=>{
try {
  const res = await axios.get(`${Server_URL}/user/api/v1/fetch-user`, {withCredentials:true});
  const data = res.data.user;
  return data;
} catch (error) {
  return error.message;
}
})
export const LogoutUser = createAsyncThunk("Logout/User", async({navigate})=>{
try {
  const res = await axios.get(`${Server_URL}/user/api/v1/logout-user`, {withCredentials:true});
  const data = res.data;
  navigate("/register");
  return data;
} catch (error) {
  return error.message;
}
})

export default UserSlice.reducer;