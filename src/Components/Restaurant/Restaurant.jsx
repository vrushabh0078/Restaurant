import React from 'react'
import './Restaurant.css'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Menucard from '../Menucard/Menucard'
import Menu from '../Menu/MenuApi'



    const uniqueList = [
        ...new Set(
            Menu.map((curElem) => {
                return curElem.category;
            })
        ),
        "All",
    ];

    console.log(uniqueList);

const Restaurant = () => {

    const [ menuData, setMenuData ] = useState(Menu)
    const [ menuList, setMenuList ] = useState(uniqueList)

    const filterItem = (category) => {
        if (category === "All")
            {
                setMenuData(Menu);
                return;
            }
            const updatedList = Menu.filter ((curElem) => {
                return curElem.category === category;
            })
            setMenuData(updatedList)
    }
    
  return (
    <>
        <div className="rstnt">
            <Navbar filterItem = {filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />
        </div>
    </>
  )
}

export default Restaurant
