import React from 'react';
import './normalpose.scss';
import { Icon } from "@blueprintjs/core";

function NormalPost() {
    return(
        <div id="normalpost"> 
            <div className="header">
                <a href="#"><Icon icon="person" iconSize={17} className="profileicon"/></a>
                <div className="profileInfo">
                    <div className="name"><a href="#">Satt Paing</a> <span>- Master ( Class I )</span></div>
                    <div className="info"><span>20 mins . </span> 2020 - Myanmar</div>
                </div>
            </div>
            <div className="content">
                <div className="textcontent">
                COVID-19 ရောဂါ စောင့်ကြပ်ကြည့်ရှုမှုနှင့်ပတ်သက်၍ သတင်းထုတ်ပြန်ခြင်း
                (၁-၄-၂၀၂၀) ရက်နေ့၊ ည (၈:၀၀) နာရီ
                ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄<br></br>
                ၁။ ကျန်းမာရေးနှင့်အားကစားဝန်ကြီးဌာနသည် ကမ္ဘာ့နိုင်ငံများတွင် ကူးစက်ပျံ့နှံ့လျက်ရှိ သည့် COVID-19 လတ်တလောအသက်ရှူလမ်းကြောင်းဆိုင်ရာ ရောဂါဖြစ်ပွားမှုဖြစ်စဉ်နှင့် ပတ်သက်၍ ရောဂါစောင့်ကြပ်ကြည့်ရှုခြင်း လုပ်ငန်းများအား အပြည်ပြည်ဆိုင်ရာ ဝင်ပေါက်၊ ထွက်ပေါက်ဂိတ် များတွင်လည်းကောင်း၊ ဆေးရုံအခြေပြုအဖြစ်လည်းကောင်း၊ ပြည်သူလူထု အခြေပြု စောင့်ကြပ် ကြည့်ရှုခြင်းလု...
                See More
                </div>
            </div>
            <div className="footer">
                <div className="footerleft">
                    <div className="viewer">
                        <div>
                            <Icon icon="eye-open" iconSize={15} className="viewicon"></Icon>
                        </div>
                        <div className="viewperson">5</div>
                    </div>
                </div>
                <div className="footerright">
                    <div className="readmore">
                        <a href="#">Read More >></a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default NormalPost;