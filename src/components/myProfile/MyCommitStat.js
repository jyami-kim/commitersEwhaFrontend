import React, { Component } from 'react'
import styles from './UserInfo.module.css'
import subStyles from './MyCommitStat.module.css'
import { Bar } from 'react-chartjs-2';
import { getMyWeekdayStat, getMyHourStat } from '../../api/APIGithub'

class MyCommitStat extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let statWeekDay = () => {
            getMyWeekdayStat()
                .then(res => {
                    console.log(res)
                    if (res.status == -200) {
                        console.log(this.props.props)
                        this.props.props.saveWeekDayStat(res.response)
                        console.log(this.props.props.statWeekDay)
                    }
                }).catch(error => {
                    this.setState({
                        loading: false
                    });
                    console.log(error);
                });
        }

        let statHour = () => {
            getMyHourStat()
                .then(res => {
                    console.log(res)
                    if (res.status == -200) {
                        this.props.props.saveHourStat(res.response)
                        console.log(this.props.props.statHour)
                    }
                }).catch(error => {
                    this.setState({
                        commitMapLoading: false
                    });
                    console.log(error);
                });
        }

        if (this.props.props.statHour == null) {
            statHour();
        }
        if (this.props.props.statWeekDay == null) {
            statWeekDay();
        }
    }

    render() {

        return (
            <div className={styles.container}>
                <div className={[styles.rowBox, subStyles.height].join(" ")} >
                    <WeekDayBar weekdayStat={this.props.props.statWeekDay} />
                    <HourBar hourStat={this.props.props.statHour} />
                </div>

            </div>
        )
    }
}

export default MyCommitStat;

class WeekDayBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: {
                labels: ['평균', '월', '화', '수', '목', '금', '토', '일'],
                datasets: [
                    {
                        barPercentage: 0.15,
                        backgroundColor: ['#888888', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
                        data: [0, 0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            }

        }

        let max = -1
        let maxScore = -1
        if (this.props.weekdayStat) {
            const sum = this.props.weekdayStat.map(s => {
                this.state.chart.datasets[0].data[s.weekDay + 1] = s.count;
                if (maxScore < s.count) {
                    maxScore = s.count;
                    max = s.weekDay + 1;
                }
                return s.count
            }).reduce((total, c) => total += c, 0)
            this.state.chart.datasets[0].data[0] = sum / 7;
            this.state.max = maxScore;
            this.state.chart.datasets[0].backgroundColor[max] = '#00462a'
        }
    }


    render() {
        const options = {
            legend: {
                display: false
            }
        }
        return (
            <div className={subStyles.item1}>
                <div className={styles.subtitle}>요일별 통계</div>
                <div className={subStyles.chart}>
                    <Bar
                        data={this.state.chart}
                        width={420}
                        height={260}
                        options={options} />
                </div>
                <div className={styles.infoBox}>
                    <div className={subStyles.infoTitle}>평균 커밋</div>
                    <div className={subStyles.info}>{parseInt(this.state.chart.datasets[0].data[0])}</div>
                </div>
                <div className={subStyles.line}></div>
                <div className={styles.infoBox}>
                    <div className={subStyles.infoTitle}>최다 커밋</div>
                    <div className={subStyles.info}>{this.state.max}</div>
                </div>
            </div>
        )
    }

}

class HourBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: {
                labels: ['평균', '0', '', '', '', '', '', '', '6', '', '', '', '', '', '', '12', '', '', '', '', '', '', '18', '', '', '', '', '', ''],
                datasets: [
                    {
                        barPercentage: 0.3,
                        backgroundColor: ['#888888', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            },
            max: 0
        }

        let max = -1
        let maxScore = -1
        if (this.props.hourStat) {
            const sum = this.props.hourStat.map(s => {
                this.state.chart.datasets[0].data[s.hour + 1] = s.count;
                if (maxScore < s.count) {
                    maxScore = s.count;
                    max = s.hour + 1;
                }
                return s.count
            }).reduce((total, c) => total += c, 0)
            this.state.chart.datasets[0].data[0] = sum / 24;
            this.state.max = maxScore;
            this.state.chart.datasets[0].backgroundColor[max] = '#fcc446'
        }
    }

    render() {
        const options = {
            legend: {
                display: false
            }
        }
        return (
            <div className={subStyles.item2}>
                <div className={styles.subtitle}>시간별 통계</div>
                <div className={subStyles.chart}>
                    <Bar
                        data={this.state.chart}
                        width={640}
                        height={260}
                        options={options} />
                </div>
                <div className={styles.infoBox}>
                    <div className={subStyles.infoTitle}>평균 커밋</div>
                    <div className={subStyles.info}>{parseInt(this.state.chart.datasets[0].data[0])}</div>
                </div>
                <div className={subStyles.line}></div>
                <div className={styles.infoBox}>
                    <div className={subStyles.infoTitle}>최다 커밋</div>
                    <div className={subStyles.info}>{this.state.max}</div>
                </div>
            </div>
        )
    }

}