import React, { Component } from 'react'
import styles from './UserInfo.module.css'
import { Bar } from 'react-chartjs-2';

class MyCommitStat extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // let score = () => {
        //     getMyRanking()
        //         .then(res => {
        //             console.log(res)
        //             if(res.status== -200 ){
        //                 this.props.props.saveScore(res.response)
        //             }
        //         }).catch(error => {
        //             this.setState({
        //                 loading: false
        //             });
        //             console.log(error);
        //         });
        // }

        // let commitMap = () => {
        //     getMyCommitMap()
        //         .then(res => {
        //             console.log(res)
        //             if(res.status== -200 ){
        //                 this.props.props.saveCommitMap(res.response)
        //             }
        //         }).catch(error => {
        //             this.setState({
        //                 commitMapLoading: false
        //             });
        //             console.log(error);
        //         });
        // }

        // if (this.props.props.commitMap == null) {
        //     commitMap();
        // }
        // if (this.props.props.score == null) {
        //     score();
        // }
    }

    render() {
        
        const timeData = {
            labels: ['평균', '일', '월', '화', '수', '목', '금', '토'],
            datasets: [
                {
                    backgroundColor: ['rgba(75,192,192,1)', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red'],
                    data: [10, 20, 30, 65, 59, 80, 81, 56]
                }
            ]
        }
        
        return (
            <div className={styles.container}>
                <div className={styles.rowBox}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>요일별 통계</div>
                        <Bar
                            data={this.state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>시간별 통계</div>
                        <Bar
                            data={this.state}
                            options={{
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        barPercentage: 0.15
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default MyCommitStat;