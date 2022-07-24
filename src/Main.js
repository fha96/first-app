import React from "react";
import HornedBeast from "./hornedbeast";

class Main{
    render(){
        return(
            <div className="main-container">
            <HornedBeast src="https://th.bing.com/th/id/OIP.iwMVNNNnRo3CyiycD6erfQHaKC?pid=ImgDet&rs=1" alt="pic1" title="pic1"/>
            <HornedBeast src="https://th.bing.com/th/id/OIP.iwMVNNNnRo3CyiycD6erfQHaKC?pid=ImgDet&rs=1" alt="pic2" title="pic2" />
            </div>
        )
    }
}
export default Main; 