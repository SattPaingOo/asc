import React from 'react';
import './friendlist.scss';
import { Icon } from "@blueprintjs/core";

function FriendList() {
    return (
        <div id="friendlist">
            <div className="friendlistshowpanel">
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Thu Yein Soe
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Ye Yint Ko
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Myat Min Paing
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Zay Yar Lin
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Myat Noe Kyi Phyu
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frienddiv">
                    <div className="img">
                        <Icon icon="person" iconSize={17} className="profileicon"/>
                    </div>
                    <div className="title">
                        <div>
                            <div className="upper">
                                Phyo Thazin
                            </div>
                            <div className="lower">
                                Master ( class I )
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendList;