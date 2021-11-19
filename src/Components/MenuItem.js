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
                                <ul className="hover-items">
                                    <li>
                                    <a href={item.link1}> </a>
                                    <a href={item.link2}> </a>
                                    </li>
                                </ul>
                            </div>
                            <h5>
                                {item.title}
                            </h5>
                            <p>
                                Placeholder Paragraph
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItem
