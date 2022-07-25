import React from "react";
import HornedBeast from "./hornedbeast";
import Data from './data.json';
import NewCard from "./bootstrapComp/card";
import './App.css';
import { Card } from "react-bootstrap";

class Main extends React.Component{
    render(){
        return(
            Data.map( data =>{
                return(
                    <div className="main-container" key={data.id}>
                        <HornedBeast link={data.image_url} title={data.title} discripe={data.description}/>
                        {/* <NewCard title={data.title} link={data.image_url} decripe={data.description} /> */}
                        
                    </div>
                )
            })
           
        )
    }
}
export default Main; 