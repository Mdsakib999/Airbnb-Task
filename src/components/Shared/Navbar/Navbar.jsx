import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import MenuDropdown from './MenuDropdown'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import data from "../../../../public/rooms.json"
import SearchResult from '../../SearchResult'

const Navbar = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const [searchItems, setSearchItems] = useState('');
 
  

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <div onClick={toggleTextVisibility}>
            
            <Search ></Search>
            
            </div>
            <MenuDropdown />
          </div>
          {isTextVisible && (
        <div className="w-[70%] mx-auto mt-2 bg-gray-100 rounded-full flex justify-between">
          <div className='w-[35%] bg-white rounded-full shadow-xl px-5 py-3'>
            <p>Where</p>
            <input className='focus:outline-none w-[90%] ' type="text" name="" id="" placeholder='Search destinations' onChange={(e) => setSearchItems(e.target.value)}/>
          </div>
           
          <div className='ml-6 w-[15%] px-5 pt-3 hover:bg-gray-200 rounded-full text-center'>
            <p>Check in</p>
            <p>Add dates</p>
          </div>

          <div className='text-center mx-6 w-[15%]  px-5 pt-3 hover:bg-gray-200 rounded-full  '>
          <p>Check Out</p>
            <p>Add dates</p>
          </div>

          <div className=' pt-3 relative w-[30%] hover:bg-gray-200 rounded-full pl-5'>

          <div className=''>
          <p>Check Out</p>
            <p>Add dates</p>
          </div>

            <div className='flex items-center w-[32%] p-2 bg-rose-600 rounded-full text-white absolute right-4 top-4'>
            <BiSearch size={18} />
            <p>Search</p>
          </div>
          </div>

          <div>
            {
              data.filter((items) => {
                return searchItems.toLowerCase() == '' ? items : items.location.toLowerCase().includes(searchItems)
              }).map((items) => {
                // console.log(items.location)
                <h1 className='mt-24'>{items.location}</h1>
              })
            }
          </div>

        </div>

        

      )}

      
        </Container>
      </div>
    </div>
  )
}

export default Navbar
