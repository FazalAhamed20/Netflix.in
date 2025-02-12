import React,{useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc,doc,onSnapshot } from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

function SavedShow() {
    const [movies,setMovies]=useState([])
    const {user}=UserAuth()

    const sideLeft=()=>{
        let slider=document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft-500
      }
      const sideRight=()=>{
        let slider=document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft+500
      }
      useEffect(()=>{
        onSnapshot(doc(db,'users',`${user ?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows )
        })
      },[user ?.email])

      const movieRef=doc(db,'users',`${user?.email}`)
      const deleteShow=async (passedID)=>{
        try {
            const result=movies.filter((item)=>item.id!==passedID);
            await updateDoc(movieRef,{
                savedShows:result,
            });
            
        } catch (error) {
            console.log(error)
            
        }

      }
     
  return (
    <div>
    <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft onClick={sideLeft} className='absolute bg-white left-0 cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10  hidden group-hover:block' size={40}/>
      <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies.map((item, id) => (
          <div key={id}  className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
          <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
          <div className='w-full h-full top-0 left-0 absolute hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='flex justify-center items-center text-center whitespace-normal text-xs md:text-sm font-bold h-full'>{item?.title}</p>
           <p onClick={()=>deleteShow(item.id)}  className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
          </div>
        </div>
   
        ))}
      </div>
      <MdChevronRight onClick={sideRight} className='absolute bg-white right-0 cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10  hidden group-hover:block' size={40}/>
    </div>
  </div>
  )
}

export default SavedShow

