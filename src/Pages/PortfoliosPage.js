import React from 'react';
import Categories from '../Components/Categories';
import Tittle from '../Components/Tittle';

function PortfoliosPage() {
    return (
        <div className="PortfoliosPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'Portfolios'}/>
            </div>
            <div className="portfolios">
                <Categories/>
            </div>
        </div>
        
    )
}
export default  PortfoliosPage;
