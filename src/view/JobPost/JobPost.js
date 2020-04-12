import React from 'react';
import "./JobPost.scss";
import ViewJobPost from '../../components/ViewJobPost/ViewJobPost';

class JobPost extends React.Component{
   constructor(props){
       super(props);
   }
   render(){
       return(
           <div id="job_post">
              <div className="show_pannel">
                 <div className="left">
                    <div className="left_menu">

                    </div>
                    <div className="middle">
                      <ViewJobPost/>
                      <ViewJobPost/>
                      <ViewJobPost/>
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
}

export default JobPost;