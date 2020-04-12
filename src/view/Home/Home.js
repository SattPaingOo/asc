import React from 'react';
import AddPost from '../../components/AddPost/AddPost';
import NormalPost from '../../components/NormalPost/NormalPost';
import CompanyList from '../../components/CompanyList/CompanyList';
import Advertise from '../../components/Advertise/Advertise';
import FriendList from '../../components/FriendList/FriendList';
import AdCarousel from '../../components/AdCarousel/AdCarousel';
import './home.scss';

function Home () {
    return(
        <div id="home">
            <div className="showpanel">
                <div className="left">
                    <div className="adcarousel">
                        <AdCarousel/>
                    </div>
                    <div className="leftmenu">
                        <CompanyList/>
                    </div>
                    <div className="middle">
                        <AddPost/>
                        <NormalPost/>
                        <NormalPost/>
                        <NormalPost/>
                        <NormalPost/>
                        <NormalPost/>
                    </div>
                    <div className="rightmenu">
                        <Advertise/>
                    </div>
                </div>
                <div className="right">
                    <FriendList/>
                </div>    
            </div>
        </div>
    )
}

export default Home;