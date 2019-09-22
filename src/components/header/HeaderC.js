import React from 'react';
import {Menu,Layout} from "antd";
import Link from "react-router-dom/es/Link";


class HeaderC extends React.Component{

    constructor(props){
        super(props);
        this.state = {selected:props.selected};
    }

    render(){

        return (



                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.state.selected]}
                    style={{ textAlign:"center", lineHeight: '70px',height:'10vh', backgroundColor:'transparent'}}
                >
                    <Menu.Item key="home"><Link to="/" />Home</Menu.Item>
                    <Menu.Item key="about"><Link to="/about" />About</Menu.Item>
                    {/*<Menu.Item key="extras"><Link to="/extras" />Extras</Menu.Item>*/}
                </Menu>
            )

    }
}
export default HeaderC;