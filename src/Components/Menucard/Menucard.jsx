import React, { useState } from 'react'
import './Menucard.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Menucard = ( { menuData} ) => {

    const [ visibleDesc , setVisibleDesc ] = useState({})

    const toggleDesc = ( itemId ) => {
        setVisibleDesc ({
            ...visibleDesc,
            [itemId] : !visibleDesc[itemId]
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
                                <span className="card-tag subtle"><button><AddCircleIcon/></button></span>
                            </div>

                        </div>
                    
                )
            })}

        </section>
    
  )
}

export default Menucard
