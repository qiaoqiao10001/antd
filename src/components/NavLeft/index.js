import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import menuList from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;


function handleClick(e) {
    console.log('click', e);
}


export default class NavLeft extends Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
        console.log(menuTreeNode)
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>

        })
    }

    render(){
        return(
            <div>

                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Bike manage</h1>
                </div>

                <Menu theme='dark' onClick={handleClick} mode="vertical">
                    {/*<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>*/}
                        {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                        {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                        {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                        {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

