import React from 'react';
import './companyList.scss';
import { Tag } from '@blueprintjs/core';

function CompanyList() {

    const companyList = [
        {
            path : '/',
            name : 'Doo Doo'
        },
        {
            path : '/',
            name : 'Zay Company'
        },
        {
            path : '/',
            name : 'Xiang Xiang'
        },
        {
            path : '/',
            name : 'Ye Yint Ko'
        },
        {
            path : '/',
            name : 'Royal Chinese'
        },
        {
            path : '/',
            name : 'Xiang Xiang'
        },
    ]

    return(
        <div id="companyList">
            <div className="companyshowpanel">
                <div className="title">
                    <div>Company List</div>
                </div>
                <div className="content">
                    {
                        companyList.map( (item,index) => (
                            <Tag 
                                className="tag"
                                key={index} 
                                fill 
                                minimal 
                                large 
                                interactive 
                            >
                                {item.name}
                            </Tag>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default CompanyList;