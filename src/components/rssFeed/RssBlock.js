import React, { Component } from 'react'
import './RssBlock.css'
import {Link} from 'react-router-dom'


export class RssBlock extends Component {
    

    render() {
        let imageBlock;
        
        if (this.props.image != null) {
            imageBlock = <img className= "image-box display-image" src={this.props.image} alt="대체 텍스트" />;
            
          } else {
            imageBlock = <div className="image-box block-image"></div>;
          }

        return (
            <a href= {this.props.link} style={{ textDecoration: 'none' }}>
                <div className= "card-blank">
                    <div className = "row">
                        <span className = "badge" style={{backgroundColor : this.props.color}}>{this.props.company}</span>
                    </div>
                    <div className = "row block-container">
                        <div className = "contents">
                            <div className = "title-text">{this.props.title}</div>
                            <div className = "date-text" style={{color : this.props.color}}>{this.props.date}</div>
                            <div className = "description-text row">{this.props.description}</div>
                        </div>
                        <div className = "image">
                            {imageBlock}
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default RssBlock