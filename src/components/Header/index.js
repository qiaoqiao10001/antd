import React,{Component} from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

const weatherUrl = 'http://api.map.baidu.com/telematics/v3/weather?location=guangzhou&output=json&ak=3p49MVra6urFRGOT9s8UBWr2';

export default class Header extends Component{

    componentWillMount(){
        this.setState({
            userName:'admin'
        })

        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({sysTime})
        },1000)
        this.getWeatherAPIDATA();
    }

    getWeatherAPIDATA(){
        let city = ''
        axios.jsonp({
            url:weatherUrl,
        })
    }

    render(){
        return(
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎,{this.state.userName}</span>
                        <a href="a">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}