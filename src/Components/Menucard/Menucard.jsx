import React, { useState } from 'react'
import './Menucard.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const Menucard = ( { menuData} ) => {

    const [ visibleDesc , setVisibleDesc ] = useState( {} )
    const [ itemCount , setItemCount ] = useState( {} )

    const toggleDesc = (itemId) => {
        setVisibleDesc ({
            ...visibleDesc,
            [itemId] : !visibleDesc[itemId]
        })
    }

    const countAdd = (itemId) => {
        setItemCount ({
            ...itemCount,
            [itemId] : (itemCount[itemId] || 0 ) + 1
        })
    }

    const countRemove = (itemId) => {
        setItemCount ({
            ...itemCount,
            [itemId] : itemCount[itemId] > 0 ? itemCount[itemId] - 1 : 0
        })
    }
    
  return (
    
        <section className='main-card--container'>
            
            {menuData.map((curElem) =>{
                return (
                    
                        <div className="card-container" key={curElem.id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className='card-author subtle'>
                                    {curElem.id}.{curElem.name}
                                    </span>
                                    <h2 className='card-title'>
                                        {curElem.name}
                                    </h2>
                                    { visibleDesc [curElem.id] ? (
                                        <span className='card-description subtle'>
                                            {curElem.description}
                                        </span>
                                    ) : null 
                                    }
                                    <br /><br />
                                    <div className="card-read" onClick={() => toggleDesc(curElem.id)}>
                                        {visibleDesc[curElem.id] ? 'Hide' : 'Read'}
                                    </div>
                                </div>
                                <img src={curElem.img} alt="images" className='card-media' />
                                <span className="card-tag subtle">
                                    <button onClick={() => countAdd(curElem.id)}><AddCircleIcon/></button>
                                        <span className="item-count">
                                            {itemCount[curElem.id]}
                                        </span>
                                    <button onClick={() => countRemove(curElem.id)}><RemoveCircleIcon/></button>
                                </span>
                                <span className="card-tag subtle">Order Now</span>
                            </div>

                        </div>
                    
                )
            })}

        </section>
    
  )
}

export default Menucard
