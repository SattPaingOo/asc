import React from 'react';
import { Link } from 'react-router-dom';
import {Icon, Button} from '@blueprintjs/core';
import './ViewJobPost.scss';
import image from '../../assets/images/dog.jpeg.jpg';
import PostShare from '../../assets/Icon/post share.png';
import Call from '../../assets/Icon/call.png';
import Enroll from '../../assets/Icon/Enroll.png';

function ViewJobPost(){
    return(
        <div id="view_job_post"> 
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
                <label className="see">See</label>
              </div>

              <div className="status_right">
                <label className="position_value">CEO</label>
                <label className="vancant_value">testing</label>
                <label className="salary_value">500000</label>
                <label className="date_value">Urgent</label>
                <label className="duration_value">1year</label>
                    <div className="readmore">
                        <Link to={'/viewJobPostDetails'} style={{ textDecoration: 'none' }}>
                            Read More >>
                        </Link>
                    </div>
              </div>
              
            </div>
            <div className="image">
                <img src={image} width="450" height="300"/>
            </div>
        </div>
        <div className="footer">
            <div className="footer_left">
                <div className="share">
                        <Button minimal className="share_btn" icon={(<img src={PostShare} alt="Icon" className="viewJobPost-icon"/>)}>share</Button>
                </div>
            </div>
            <div className="footer_right">
                <div className="more">
                     <Button minimal className="share_btn" icon={<img src={Call} alt="Icon" className="viewJobPost-icon"/>}>Call</Button>
                     <Button minimal className="share_btn" icon={<img src={Enroll} alt="Icon" className="viewJobPost-icon"/>}>Enroll</Button>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default ViewJobPost;