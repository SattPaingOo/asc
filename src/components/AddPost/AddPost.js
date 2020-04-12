import React from 'react';
import {Icon, EditableText,Dialog, Button,FileInput} from '@blueprintjs/core'
import './AddPost.scss';

class AddPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           typedText: "",
           isOpen: false
        }
        this.changeText = this.changeText.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
        
    }

    changeText(typedvalue){
        this.setState({
            typedText: typedvalue
        })
    }

     handleOpen(){
        this.setState({
            isOpen:true
        })
     }

     handleClose(){
         this.setState({
             isOpen:false
        })
     }

    render(){
        return(
            <div id="add_post">
                <div className="header">
                    <a href="#"><Icon icon="person" iconSize={17} className="profileicon"/></a>
                    <div className="profileInfo">
                        <div className="name"><a href="#">
                            {JSON.parse(localStorage.getItem("ascuser")).name}
                        </a> <span>- Master ( Class I )</span></div>
                        <div className="info">2020 - Myanmar</div>
                    </div>
                </div>
                <div className="content">
                    <div 
                        className="textContent"
                        onClick={this.handleOpen}
                    >
                       <EditableText
                         placeholder="  Write ..... "
                         intent="none"
                         multiline={true}
                         minLines={2}
                         maxLines={2}
                         className="textbox"
                         value={this.state.typedText}
                         onChange= {this.changeText}
                        >
                       </EditableText>
                    </div> 
                </div>
               
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.handleClose}
                    className="dialog"
                >
                    <div>
                      <div id="dialog_addpost">
                        <div className="dialog_header">
                            <a href="#"><Icon icon="person" iconSize={17} className="profileicon"/></a>
                            <div className="profileInfo">
                                <div className="name"><a href="#">
                                    {JSON.parse(localStorage.getItem("ascuser")).name}
                                </a> <span>- Master ( Class I )</span></div>
                                <div className="info">2020 - Myanmar</div>
                            </div>
                        </div> 
                      <div className="dialog_content">
                        <div className="dialog_textContent">
                            <EditableText
                                placeholder="  Write ..... "
                                intent="none"
                                className="dialog_textbox"
                                multiline={true}
                                minLines={3}
                                maxLines={16}
                                value={this.state.typedText}
                                onChange= {this.changeText}
                            >
                            </EditableText>
                        </div> 
                      </div>
                      <div className="dialog_footer">
                        <div className="footer-left">
                            <FileInput text="Choose Files"></FileInput> 
                        </div>
                        <div className="footer_right">
                            <Button className="post_btn" intent="primary">Upload</Button>
                        </div>
                      </div>
                     </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}
  
export default AddPost;