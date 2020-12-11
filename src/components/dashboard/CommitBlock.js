import React, { Component } from 'react'
import styles from './CommitBlock.module.css'
import { commit } from '../../constants/color'

export class CommitBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.getColor = this.getColor.bind(this);
    }

    handleMouseHover() {
        this.setState({
            hovering: !this.state.hovering,
        });
    }

    getColor(){
        if(this.props.count > 0){
            const ceil = Math.floor(this.props.count / 3);
            const index = ceil > 2 ? 2 : ceil;
            return commit.default[index]
        }else{
            return "#ededed";
        }
    }

    render() {

        return (
            <td>
                <div className={styles.box}
                    onMouseOver={this.handleMouseHover}
                    onMouseOut={this.handleMouseHover}
                    style={{ backgroundColor: this.getColor()}}
                    
                ></div>

                {this.state.hovering &&
                    <div className={styles.hoverBox} >
                        <div>{this.props.count} commit on {this.props.date}</div>
                    </div>}
            </td>
        )
    }
}

export default CommitBlock