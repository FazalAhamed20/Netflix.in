import React, { useState,useEffect } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

import axios from 'axios'
import Movies from './Movies'

function Row({title,fetchUrl,rowId}) {
    const [movies,setMovies]=useState([])
  
    useEffect(()=>{
        axios.get(fetchUrl).then((response)=>{
          setMovies(response.data.results)

        })
    },[fetchUrl])
    const sideLeft=()=>{
      let slider=document.getElementById('slider'+rowId)
      slider.scrollLeft=slider.scrollLeft-500
    }
    const sideRight=()=>{
      let slider=document.getElementById('slider'+rowId)
      slider.scrollLeft=slider.scrollLeft+500
    }
   

    return (
        <div>
          <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
          <div className='relative flex items-center group'>
            <MdChevronLeft onClick={sideLeft} className='absolute bg-white left-0 cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10  hidden group-hover:block' size={40}/>
            <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              {movies.map((item, id) => (
                <Movies key={id} item={item} />
         
              ))}
            </div>
            <MdChevronRight onClick={sideRight} className='absolute bg-white right-0 cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10  hidden group-hover:block' size={40}/>
          </div>
        </div>
      );
      
}

export default Row
