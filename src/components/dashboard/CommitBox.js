import React, { Component } from 'react'
import CommitBlock from "./CommitBlock"

export class CommitBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commitBox: {},
            total: 0
        }

        if (this.props.commitMap) {
            const sum = this.props.commitMap.map(c => {
                this.state.commitBox[c.commitDate] = c.commitCount;
                return c.commitCount;
            }).reduce((total, c) => total += c, 0)
            this.state.total = sum;
            console.log(this.state.commitBox);
        }
    }

    render() {
        const block = [];
        const startDate = this.getStartDate();

        for (var i = 0; i < 7; i++) {
            const row = [];
            for (var j = 0; j < 52; j++) {
                row.push(
                    <CommitBlock 
                    id={j*7+i} 
                    date={this.getDate(startDate, j * 7 + i)} 
                    count={this.state.commitBox[this.getDate(startDate, j * 7 + i)] ? this.state.commitBox[this.getDate(startDate, j * 7 + i)] : 0} ></CommitBlock>
                );
            }
            block.push(<tr>{row}</tr>)
        }

        return (
            <div>
                <p style={{color: '#888888', fontSize: '12px'}}>{this.state.total} contributions last year</p>
                <table>
                    {block}
                </table>
            </div>
        )
    }

    getStartDate() {
        let numWeeks = 52;
        let now = new Date();
        now.setDate(now.getDate() - numWeeks * 7);
        let day = now.getDay();
        now.setDate(now.getDate() - day);
        return now;
    }

    getDate(startDate, plus) {
        let date = new Date(startDate);
        date.setDate(startDate.getDate() + plus)
        return this.getFormatDate(date);
    }

    getFormatDate(date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
    }
}

export default CommitBox
