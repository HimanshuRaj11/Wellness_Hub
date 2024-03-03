import React, { useEffect } from 'react'
import "./FindADoctor.css"
import Card from './Card'
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllDoctor } from '../../Redux/Slice/DoctorsList.slices';
export default function FindaDoctor() {
  const dispatch = useDispatch()
  const {Doctors} = useSelector((state) => ({ ...state.Doctors }));
 
  useEffect(()=>{
    dispatch(FetchAllDoctor())
  },[])
  return (
    <div className='findadoctor'>
      <div className="header">
        <div className="searchBox">
        <input type="text" name='search' placeholder='Search for a doctor...' />
        <IoSearchSharp className='searchIcon'/>
        </div>
      </div>

      <div className="cards">
       {
        Doctors?.map((items)=>{
          return(
            <Card key={items._id} items={items}/>
          )
        })
       }
      </div>
    </div>

  )
}
