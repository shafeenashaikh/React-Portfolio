import React from 'react'

function MenuItem({menuItem}) {
    return (
        <div>
            {
                menuItem.map((item)=>{
                    return(
                        <div className="portfolio" key={item.id}>
                            <div className="image-data">
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItem
