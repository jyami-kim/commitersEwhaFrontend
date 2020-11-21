import React, { Component } from 'react'
import Header from '../components/Header'
import RssBlock from '../components/rssFeed/RssBlock'
import './TechRSS.css'
import './Main.css'
import { json } from '../mock/rssMockData.js'

export class TechRSS extends Component {

    mock = {"color": "#6bd51e", "company" : "Naver D2", "title": "2020년과 이후 JavaScript의 동향 - WebAssembly", "date": "2020.10.01", 
    "description" : "구글의 NaCI(Native Client), 모질라의 asm.js(JavaScript 서브셋) 등 네이티브 머신 코드를 웹으로 가져오기 위한, 그리고 빠르게 구글의 NaCI(Native Client), 모질라의 asm.js(JavaScript 서브셋) 등 네이티브 머신 코드를 웹으로 가져오기 위한, 그리고 빠르게 실행하기 위한 시도들은 결과적으로 웹어셈블리(이하 ‘wasm’으로 표기)로 귀결되었다고 ","image" : null}

    constructor(props) {
        super(props);
        this.state = {
            mockData: json
        };
    }


    render() {

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
                            {this.state.mockData.map((data, i) => {
                                return (<span className = "tag" key = {i}>{data.blogName}</span>);
                            })}
                        </div>
                        <div className= "card-container">
                            <RssBlock color = {this.mock.color} company={this.mock.company} title={this.mock.title} date={this.mock.date} description = {this.mock.description} image={this.mock.image}/>
                            <RssBlock color = {this.mock.color} company={this.mock.company} title={this.mock.title} date={this.mock.date} description = {this.mock.description} image={this.mock.image}/>
                        </div>
                   </div>
               </div>
               

            </div>        
        )
    }
}

export default TechRSS
