import React from 'react';
import {Menu,Layout} from "antd";
import Link from "react-router-dom/es/Link";
const { Header } = Layout;


class HeaderC extends React.Component{

    constructor(props){
        super(props);
        this.state = {selected:props.selected};
    }

    render(){

        return (

            <Header style={{ position: 'relative', marginLeft:'auto', marginRight:'auto', zIndex: 1, width: '90%',  height: '0vh', backgroundColor:' #BE5A76'}}>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.state.selected]}
                    style={{ textAlign:"center", lineHeight: '70px',height:'0vh',backgroundColor:'#4469A4' }}
                >
                    <Menu.Item key="home"><Link to="/" />Home</Menu.Item>
                    <Menu.Item key="about"><Link to="/about" />About</Menu.Item>
                    {/*<Menu.Item key="extras"><Link to="/extras" />Extras</Menu.Item>*/}
                </Menu>
            </Header>)

    }
}
export default HeaderC;