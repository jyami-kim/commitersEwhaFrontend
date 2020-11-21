import React, { Component } from 'react'
import './RssBlock.css'


export class RssBlock extends Component {
    

    render() {
        let imageBlock;
        if (this.props.image != null) {
            imageBlock = <img src= {this.props.image}></img>;
          } else {
            imageBlock = <div className="imageNotFound"></div>;
          }

        return (
            // <div OnClick="location.href ='http://URL주소'" style="cursor:pointer;" >
            <div className= "card-blank" href= {this.props.url}>
                <div className = "row">
                    <span className = "badge">{this.props.company}</span>
                </div>
                <div className = "row block-container">
                    <div className = "contents">
                        <div className = "title-text row">{this.props.title}</div>
                        <div className = "date-text row">{this.props.date}</div>
                        <div className = "description-text row">{this.props.description}</div>
                    </div>
                    <div className = "image">
                        {imageBlock}
                    </div>
                </div>
            </div>
        )
    }
}

export default RssBlock