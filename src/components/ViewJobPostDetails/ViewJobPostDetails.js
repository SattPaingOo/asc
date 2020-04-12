import React from 'react';
import {Icon, Button} from '@blueprintjs/core';
import './ViewJobPostDetails.scss';
import image from '../../assets/images/dog.jpeg.jpg';
import PostShare from '../../assets/Icon/post share.png';
import Call from '../../assets/Icon/call.png';
import Enroll from '../../assets/Icon/Enroll.png';

function ViewJobPostDetails (){
    return(
    <div id="view_job_postDetails"> 
        <div className="header">
            <a href="#"><Icon icon="person" iconSize={17} className="company_icon"/></a>
            <div className="companyInfo">
                <div className="company_name"><a href="#">Company</a></div>
                <div className="company_type"> Shipping Company </div>
                <div className="company_position"> CEO </div>
            </div>
        </div>

        <div className="content">
          <div className="status">
            <h3>Main Conditions</h3>
          </div>

            <div className="condition">
              <div className="status_left">
                <label className="position">Position</label>
                <label className="vancant">Vancant</label>
                <label className="salary">Salary</label>
                <label className="date">Join Date</label>
                <label className="duration">Duration of Contract</label>
                <label className="engLvl">Level of English</label>
                <label className="requirements">Requirements</label>
              </div>

              <div className="status_right">
                <label className="position_value">CEO</label>
                <label className="vancant_value">testing</label>
                <label className="salary_value">500000</label>
                <label className="date_value">Urgent</label>
                <label className="duration_value">1year</label>
                <label className="engLvl_value">Native</label>
                <label className="requirements_value">testing</label>
              </div>
            </div>

            <div className="status1">
                <h3>Vessel Details</h3>
            </div>

             <div className="condition1">
              <div className="status_left">
                <label className="vesselName">Vessel Name</label>
                <label className="vesselType">Vessel Type</label>
                <label className="buildYear">Build Year</label>
                <label className="dwt">D.W.T</label>
                <label className="flage">Flage</label>
                <label className="mainEngine">Main Engine</label>
                <label className="crewOnboard">Crew Onboard</label>
                <label className="sailingArea">Sailing Area</label>
              </div>

              <div className="status_right">
                <label className="vesselName_value">Name of Vessel</label>
                <label className="vesselType_value">Type of Vessel</label>
                <label className="buildYear_value">Year of Build</label>
                <label className="dwt_value">DWT</label>
                <label className="flage_value">FLAGE</label>
                <label className="mainEngine_value">Engine</label>
                <label className="crewOnboard_value">Onboard Crew</label>
                <label className="sailingArea_value">Area</label>
              </div>
            </div>

            <div className="status2">
                <h3>Additional Info:</h3>
            </div>

            <div className="image">
                <img src={image} width="450" height="300"/>
            </div>
        </div>
        <div className="footer">
            <div className="footer_left">
                <div className="share">
                        <Button className="share_btn" icon={(<img src={PostShare} alt="Icon" className="viewJobPost-icon"/>)}>share</Button>
                </div>
            </div>
            
            <div className="footer_right">
                <div className="more">
                     <Button className="share_btn" icon={<img src={Call} alt="Icon" className="viewJobPost-icon"/>}>Call</Button>
                     <Button className="share_btn" icon={<img src={Enroll} alt="Icon" className="viewJobPost-icon"/>}>Enroll</Button>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default ViewJobPostDetails;