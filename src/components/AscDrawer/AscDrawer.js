import React from 'react';
import { Drawer , Tree } from '@blueprintjs/core';
import './AscDrawer.scss';
import about from  '../../assets/Icon/about_us.png';
import logout from  '../../assets/Icon/log_out.png';
import contactus from  '../../assets/Icon/contact_us.png';
import help from  '../../assets/Icon/Help.png';
import term from  '../../assets/Icon/terms_and_policies.png'; 
import soil from  '../../assets/Icon/Soil.png';
import airpopulation from  '../../assets/Icon/ait_population.png';
import watertreadment from  '../../assets/Icon/water_treadment.png';
import moneyexchange from  '../../assets/Icon/money_exchange.png';
import logo from  '../../assets/Icon/asclogo.png';
import platinumplan from  '../../assets/Icon/platinum_member_plan.png';
import silverplan from  '../../assets/Icon/silver_member_plan.png';
import monthplan from  '../../assets/Icon/point_transfer.png';
import plans from '../../assets/Icon/company_training_member.png';
import jobapply from '../../assets/Icon/job_apply.png';
import packag from '../../assets/Icon/package.png';
import pointbalance from '../../assets/Icon/point_balance.png';
import classtraining from '../../assets/Icon/class_training.png';
import billreceive from '../../assets/Icon/bill_receive.png';
import postbox from '../../assets/Icon/post_box.png';
import applycv from '../../assets/Icon/apply_cv.png';
import mail from '../../assets/Icon/mail.png';
import phone from '../../assets/Icon/phone.png';
import profile from '../../assets/Icon/user_profile.png';

const nodes = [
    {
        id : 0 , 
        hasCaret : false,
        icon : ( <img src={profile} alt="Icon" className="icon"/> ),
        label : "Profile" 
    },
    {
        id : 1 , 
        hasCaret : false,
        icon : ( <img src={phone} alt="Icon" className="icon"/> ),
        label : "Edit Phone"
    },
    {
        id : 2 , 
        hasCaret : false,
        icon : ( <img src={mail} alt="Icon" className="icon"/> ),
        label : "Edit Email"
    },
    {
        id : 3 , 
        hasCaret : false,
        icon : ( <img src={applycv} alt="Icon" className="icon"/> ),
        label : "Edit CV"
    },
    {
        id : 4 , 
        icon : ( <img src={postbox} alt="Icon" className="icon"/> ),
        isExpanded : false , 
        label : "Post Box",
        childNodes: [
            {
                id : 5 ,
                icon : ( <img src={billreceive} alt="Icon" className="icon"/> ),
                label : "Bill & Receive",
            },
            {
                id : 6 ,
                icon : ( <img src={classtraining} alt="Icon" className="icon"/> ),
                label : "Class & Training",
            },
            {
                id : 7 ,
                icon : ( <img src={jobapply} alt="Icon" className="icon"/> ),
                label : "Job & Apply",
            },
        ]
    },
    {
        id : 8 , 
        icon : ( <img src={pointbalance} alt="Icon" className="icon"/> ),
        isExpanded : false , 
        label : "300 Points",
        childNodes: [
            {
                id : 9 ,
                icon : ( <img src={monthplan} alt="Icon" className="icon"/> ),
                label : "Point Transfer",
            },
            {
                id : 10 ,
                icon : ( <img src={packag} alt="Icon" className="icon"/> ),
                label : "Packages",
            },
            {
                id : 11 ,
                icon : ( <img src={jobapply} alt="Icon" className="icon"/> ),
                label : "Job & Apply",
            },
        ]
    },
    {
        id : 12 , 
        icon : ( <img src={plans} alt="Icon" className="icon"/> ),
        isExpanded : false , 
        label : "165 Days",
        childNodes: [
            {
                id : 13 ,
                icon : ( <img src={monthplan} alt="Icon" className="icon"/> ),
                label : "3 Months Plan",
            },
            {
                id : 14 ,
                icon : ( <img src={silverplan} alt="Icon" className="icon"/> ),
                label : "6 Months Plan(+15 Days Free)",
            },
            {
                id : 15 ,
                icon : ( <img src={platinumplan} alt="Icon" className="icon"/> ),
                label : "Platinum Member Plan(+30 Days Free)",
            },
        ]
    },
    {
        id : 16 , 
        icon : ( <img src={logo} alt="Icon" className="icon"/> ),
        isExpanded : false , 
        label : "Our Club Business",
        childNodes: [
            {
                id : 17 ,
                icon : ( <img src={moneyexchange} alt="Icon" className="icon"/> ),
                label : "Money Exchange Services",
            },
            {
                id : 18 ,
                icon : ( <img src={watertreadment} alt="Icon" className="icon"/> ),
                label : "Water Treatment",
            },
            {
                id : 19 ,
                icon : ( <img src={airpopulation} alt="Icon" className="icon"/> ),
                label : "Air Population & Sanition",
            },
            {
                id : 20 ,
                icon : ( <img src={soil} alt="Icon" className="icon"/> ),
                label : "Soil Stabilization",
            },
        ]
    },
    {
        id : 21 , 
        hasCaret : false,
        icon : ( <img src={term} alt="Icon" className="icon"/> ),
        label : "Club Policies & Terms"
    },
    {
        id : 22 , 
        hasCaret : false,
        icon : ( <img src={help} alt="Icon" className="icon"/> ),
        label : "Help & Support"
    },
    {
        id : 23 , 
        hasCaret : false,
        icon : ( <img src={contactus} alt="Icon" className="icon"/> ),
        label : "Contact Us"
    },
    {
        id : 24 , 
        hasCaret : false,
        icon : ( <img src={about} alt="Icon" className="icon"/> ),
        label : "About Us"
    },
    {
        id : 25 , 
        hasCaret : false,
        icon : (
            <img src={logout} alt="Icon" className="icon"/>
        ),
        label : "Log Out"
    },
]

class AscDrawer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nodeDatas : nodes
        }
    }

    forEachNode = (nodes,callback) => {
        if(nodes == null){
            return;
        }
        for(const node of nodes){
            callback(node);
            this.forEachNode(node.childNodes,callback)
        }
    }

    handleNodeClick = (nodeData,_nodePath,e) => {
        if(nodeData.label === 'Log Out'){
            localStorage.removeItem('ascuser');
            window.location.href = "/login";
        }
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodeDatas, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state)
    }

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        this.setState(this.state)
    }

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        this.setState(this.state)
    }

    render() {
        return(
            <div id="drawerdiv">
                <Drawer
                    onClose={this.props.onclose}
                    isOpen={this.props.isopen}
                    title="&nbsp;&nbsp;&nbsp;Menu"
                    size="300px"
                    style={{
                        overflow:'scroll'
                    }}
                >
                    <Tree 
                        contents={this.state.nodeDatas}
                        onNodeClick={this.handleNodeClick}
                        onNodeCollapse={this.handleNodeCollapse}
                        onNodeExpand={this.handleNodeExpand}
                        className="tree"
                    />
                </Drawer>
            </div>
        )
    }

}

export default AscDrawer;