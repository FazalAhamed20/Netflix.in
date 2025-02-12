import React,{useState} from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'

function Movies({item}) {
    const [likes,setLikes]=useState(false)
    const [saved,setSaved]=useState(false)
    const {user}=UserAuth()

    const movieID=doc(db,'users',`${user?.email}`)

    const savedShow=async ()=>{
        if(user?.email){
            setLikes(!likes)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows:arrayUnion({
                    id:item.id,
                    title:item.title,
                    img:item.backdrop_path
                })

            })
        }else{
            alert("please log in to save show")
        }

    }
  return (
    <div  className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?. backdrop_path}`} alt={item?.title} />
    <div className='w-full h-full top-0 left-0 absolute hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
      <p className='flex justify-center items-center text-center whitespace-normal text-xs md:text-sm font-bold h-full'>{item?.title}</p>
      <p onClick={savedShow}>
        {
          likes? <FaHeart className='absolute top-4 left-4 text-gray-300'/> :<FaRegHeart className='absolute top-4 left-4 text-gray-300'  />

        }
      </p>
    </div>
  </div>
  )
}

export default Movies
