import React, { Component } from 'react'
import Header from '../components/Header'
import RssBlock from '../components/rssFeed/RssBlock'
import './TechRSS.css'
import './Main.css'
import { json } from '../mock/rssMockData.js'

export class TechRSS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mockData: json,
            page: 0,
            click: null
        };
        this.tagClick = this.tagClick.bind(this);
        this.page = this.page.bind(this);
    }

    tagClick(company){
        this.setState(status => ({
            click: company,
            page: 0
        }))
    }

    page(pageIndex){
        this.setState(status => ({
            page: pageIndex
        }))
    }

    render() {

        const dataToRender = this.state.mockData.rssFeedContents.filter(data => this.state.click == null || data.company == this.state.click)
        const pageIndex = Math.ceil(dataToRender.length/10)



        return (
            <div className = "main-container">
               <Header className="main-header"></Header>
               <div className = "container">
                   <div className = "sub-container">
                        <div className = "tab-title">
                            <span>EWHA INFO | Tech RSS</span>
                        </div>
                        <div className = "category-title row">
                            <span>Category</span>
                        </div>
                        <div>
                            {this.state.mockData.rssFeedInfos.map((data, i) => {
                                if(this.state.click == data.company){
                                    return (
                                        <div 
                                        onClick={this.tagClick.bind(this, null)} 
                                        className = "tag"
                                        style= {{backgroundColor: data.color, color: "white"}}
                                        key = {i}>{data.company}</div>
                                    );
                                }else{
                                    return (
                                        <div 
                                        onClick={this.tagClick.bind(this, data.company)} 
                                        className = "tag" 
                                        style= {{backgroundColor: `#ededed`}}
                                        key = {i}>{data.company}</div>
                                    );
                                }
                                
                            })}
                        </div>
                        <div className= "card-container">
                            {dataToRender.slice(this.state.page*10, (this.state.page+1) *10)
                            .map((data, i) => {
                                return (<RssBlock 
                                    color = {data.color} 
                                    company={data.company} 
                                    title={data.title} 
                                    date={data.date} 
                                    description = {data.description} 
                                    image= {data.image} 
                                    link={data.link}/>);
                            })}
                        </div>
                   </div>
                   <div className = "pagenation">    
                        {[...Array(pageIndex)].map((n, index) => {
                            if(index == this.state.page){
                                return (
                                <div onClick={this.page.bind(this, index)} 
                                    className = "page-number page-on">{index+1}
                                </div>)
                            }else{
                                return (
                                    <div onClick={this.page.bind(this, index)} 
                                        className = "page-number page-off">{index+1}
                                    </div>)
                            }
                        })}
                    </div>
               </div>

            </div>
        )
    }
    
}

export default TechRSS
