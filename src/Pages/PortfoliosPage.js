import React,{useState} from 'react';
import Categories from '../Components/Categories';
import MenuItem from '../Components/MenuItem';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allPortfolios'

function PortfoliosPage() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);
    return (
        <div className="PortfoliosPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'Portfolios'}/>
            </div>
            <div className="portfolios">
                <Categories/>
                <MenuItem menuItem={menuItems}/>
            </div>
        </div>
        
    )
}
export default  PortfoliosPage;
