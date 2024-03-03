import React, { useEffect } from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { FetchUser, LogoutUser } from '../../Redux/Slice/User.slice';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const {User:{user}} = useSelector((state) => ({ ...state.User }));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(FetchUser())
    },[])

    const Logout = (e)=>{
        dispatch(LogoutUser({navigate}))
        dispatch(FetchUser())
    }
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>WellnessHub</h1>
            </div>
            <div className="menu">
                <a href="/" >Home</a>
                <a href="/about" >About Us</a>
                <a href="/find-a-doctor">Find a Doctor</a>
            </div>
            <div className="auth">
                {
                    user?(
                        <>
                        <a href="/profile"><IoPersonCircleSharp className='Icon'/></a>
                        <IoMdLogOut className='Icon' onClick={Logout}/>
                        </>
                    ):(<>
                    <a href="/register"> Login</a>
                    </>)
                }
            </div>
        </div>
    )
}
