import React from "react";
import Navigation from "./bootstrapComp/navigation";
import UserInput from "./bootstrapComp/UserInput";


class Header extends React.Component {
    render(){

        return (
            <div>
            <h1 className="Header">Welcome to my first App using React</h1>
            <UserInput />
            <Navigation />
            </div>
        );
    }
}

export default Header;