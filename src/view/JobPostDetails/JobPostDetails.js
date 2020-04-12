import React from 'react';
import ViewJobPostDetails from '../../components/ViewJobPostDetails/ViewJobPostDetails';
import './JobPostDetails.scss';

function JobPostDetails (){
    return(
        <div id="job_postDetails">
              <div className="show_pannel">
                 <div className="left">
                    <div className="left_menu">

                    </div>
                    <div className="middle">
                      <ViewJobPostDetails/>
                    </div>
                    <div className="right_menu">

                    </div>
                 </div>
                 <div className="right">

                </div>
              </div>
           </div>
    )
}

export default JobPostDetails;