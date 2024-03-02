import React, { useState } from 'react'
import "./login.css"
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FetchUser, LoginUser,RegisterUser } from '../../Redux/Slice/User.slice';
import {RegisterDoctor} from "../../Redux/Slice/Doctor.slice"

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [signin, setSgnin] = useState(true);
    const [asDoctor, setAsDoctor] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        confirmPassword: ""
    })

    const { name, password, email, confirmPassword } = formData;

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const OnLogin = async (e) => {
        dispatch(LoginUser({ formData, navigate }))
        dispatch(FetchUser())
    }

    const OnSignIn = (e) => {
        if(asDoctor){
            dispatch(RegisterDoctor({ formData, navigate }))
        }else{
            dispatch(RegisterUser({ formData, navigate }))
        }
        dispatch(FetchUser())
    }

    const handelAsDoctor = (e)=>{
        setAsDoctor(!asDoctor);
        console.log(e.target.value);
    }

    return (
        <div className='Login'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className={`${signin ? "active" : "inactive"}`} onClick={() => setSgnin(true)}> Sign In </h2>
                    <h2 className={`${!signin ? "active" : "inactive"} underlineHover`} onClick={() => setSgnin(false)}>Sign Up </h2>


                    <div className="fadeIn first">
                        <BsPersonCircle className='PIcon' />
                    </div>
                    {
                        signin ? "" : (

                            <div className="asA">
                                <input type="checkbox" name="asaDoctor" value={asDoctor} onClick={handelAsDoctor} id="as" />
                                <span>As A Doctor</span>
                            </div>
                        )
                    }

                    {
                        signin ? (

                            <>
                                <input type="text" id="login" className="fadeIn second" onChange={onChangeHandler} value={email} name="email" placeholder="Email" />
                                <input type="password" id="password" className="fadeIn third" onChange={onChangeHandler} value={password} name="password" placeholder="Password" />
                                <input type="submit" className="fadeIn fourth" onClick={OnLogin} value="Log In" />

                            </>

                        ) : (
                            <>
                                <input type="text" value={name} onChange={onChangeHandler} className="fadeIn" name="name" placeholder="Name" />
                                <input type="text" className="fadeIn" value={email} onChange={onChangeHandler} name="email" placeholder="Email" />
                                <input type="password" value={password} onChange={onChangeHandler} className="fadeIn" name="password" placeholder="Password" />
                                <input type="password" value={confirmPassword} onChange={onChangeHandler} className="fadeIn" name="confirmPassword" placeholder="Confirm Password" />
                                <input type="submit" className="fadeIn fourth" onClick={OnSignIn} value="Sign In" />

                            </>
                        )
                    }

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
