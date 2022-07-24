import React from "react";

class HornedBeast{
    render(){
        return(
            <div className="beast-container">
                <h2>
                    {this.props.value}
                </h2>
                <img src={this.props.link} alt={this.props.alt} title={this.props.title} />
                <p>
                    {this.props.value}
                </p>
            </div>
        )
    }
}

export default HornedBeast;