import React from "react";
import HornedBeast from "./hornedbeast";

class Main extends React.Component{
    render(){
        return(
            <>
            <div className="main-container">
            <HornedBeast title={'Cat'} link={'https://th.bing.com/th/id/OIP.JryFL8e2AIGQdJ5AO4NtLAHaG3?pid=ImgDet&rs=1'}
            alt={'Cat image'} picTitle={'Cat'} discripe={'Cat is one of the most beatiful animals'} />
            </div>
            <div className="main-container">
            <HornedBeast title={'Dog'} link={'https://th.bing.com/th/id/R.bbad20c99d72b498452563e5612eb6dd?rik=EJF07hxvIwP0xQ&pid=ImgRaw&r=0'}
            alt={'Dog image'} picTitle={'Dog'}  discripe={'Dogs are mostly used for guard purposes'}/>
            </div>
            </>
        )
    }
}
export default Main; 