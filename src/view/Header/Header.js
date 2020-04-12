import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Button , Alignment, Colors ,Icon } from '@blueprintjs/core';
import AscDrawer from '../../components/AscDrawer/AscDrawer';
import AllNewPost from '../../assets/Icon/All News post.png';
import ShippingCompany from '../../assets/Icon/shipping Company.png';
import TrainingPost from '../../assets/Icon/Training post.png';
import E_LearningPost from '../../assets/Icon/E-LEARNING post.png';
import Seafarer2 from '../../assets/Icon/Seafarer (2).png';
import './header.scss';

function Header(){  

    const [isOpenDrawer,drawerstatus] = React.useState(false);

    function closedrawer() {
        drawerstatus(false);
    }

    return(
        <div id="header">
            <Navbar className="navbar">
                <div className="navdiv"> 
                    <Navbar.Group>
                        <Link to={'/'} style={{ textDecoration: 'none' , color : 'black'}}>
                            <h2>A Seamen Club</h2>
                        </Link>
                    </Navbar.Group> 

                    <Navbar.Group align={Alignment.RIGHT}>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button className="bp3-minimal" icon={(<img src={AllNewPost} alt="Icon" className="home-icon"/>)} style={{color:Colors.BLACK}} title="Normal Post"/>
                    </Link>
                    <Link to={'/job_post'} style={{ textDecoration: 'none' }}>
                        <Button className="bp3-minimal" icon={(<img src={ShippingCompany} alt="Icon" className="home-icon"/>)} style={{color:Colors.BLACK}} title="Job Post" />
                    </Link>
                    <Link to={'/training_post'} style={{ textDecoration: 'none' }}>
                        <Button className="bp3-minimal" icon={(<img src={TrainingPost} alt="Icon" className="home-icon"/>)} style={{color:Colors.BLACK}} title="Training Post"/>
                    </Link>
                    <Link to={'/e_learning'} style={{ textDecoration: 'none' }}>
                        <Button className="bp3-minimal" icon={(<img src={E_LearningPost} alt="Icon" className="home-icon"/>)} style={{color:Colors.BLACK}} title="E-Learning"/>
                    </Link>
                    <Link to={'/shipmate'} style={{ textDecoration: 'none' }}>
                        <Button className="bp3-minimal" icon={(<img src={Seafarer2} alt="Icon" className="home-icon"/>)} style={{color:Colors.BLACK}} title="Shipmate"/>
                    </Link>

                    <Navbar.Divider/>
                    
                    <Button 
                        className="bp3-minimal"
                        icon={(<Icon icon="menu" iconSize={25}/>)}
                        intent="success" 
                        style={{color:Colors.BLACK,borderColor:Colors.WHITE}} 
                        outlined="true"
                        onClick={()=>drawerstatus(true)}
                        title="Menu"
                    ></Button>

                    </Navbar.Group>
                </div>    
            </Navbar>

            <AscDrawer isopen={isOpenDrawer} onclose={closedrawer}/>

        </div>
    )
}

export default Header;