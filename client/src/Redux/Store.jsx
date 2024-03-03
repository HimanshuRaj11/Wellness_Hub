import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./Slice/User.slice";
import DoctorSlice from "./Slice/Doctor.slice";
import DoctorsSlice  from "./Slice/DoctorsList.slices";


export const store = configureStore({
    reducer:{
        User:UserSlice,
        Doctor:DoctorSlice,
        Doctors:DoctorsSlice
    }
})