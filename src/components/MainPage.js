import React, {Component} from 'react';
import Header from "./header/HeaderC";
import './MainPage.css';
import {Icon, Tooltip} from 'antd';
import { Button } from 'antd';
import { Layout } from 'antd';



const { Content, Footer } = Layout;



class MainPage extends Component{


    render(){

        const iconGithub = <Icon type="github" style={{ fontSize: '44px'}} />;
        const iconLinkedin = <Icon type="linkedin" style={{ fontSize: '44px'}} />;
        const iconInstagram = <Icon type="instagram" style={{ fontSize: '44px'}} />;
        const iconTwitter = <Icon type="twitter" style={{ fontSize: '44px'}} />;
        const iconYoutube = <Icon type="youtube" style={{ fontSize: '44px'}} />;
        const iconFacebook = <Icon type="facebook" style={{ fontSize: '44px'}} />;


        return (
            <Layout className="layout">

                <Content>
                    <div className="contentdiv1">
                        <Header selected="home"/>
                        <bg className="buttons">
                            <Tooltip title="github.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.github.com/ozanaydin9')} style={{ width:60, height:60, margin:50  }} type="link" ghost size="large" shape="circle" >{iconGithub}</Button>
                            </Tooltip>
                            <Tooltip title="linkedin.com/in/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.linkedin.com/in/ozanaydin9')} style={{ width:60, height:60, margin:50 }} type="link" ghost size="large" shape="circle">{iconLinkedin}</Button>
                            </Tooltip>
                            <Tooltip title="instagram.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.instagram.com/ozanaydin9')} style={{ width:60, height:60, margin:50 }} type="link" ghost size="large" shape="circle"> {iconInstagram} </Button>
                            </Tooltip>
                            <Tooltip title="twitter.com">
                                <Button onClick={() => window.open( 'http://www.twitter.com/')} style={{ width:60, height:60, margin:50 }} type="link" ghost size="large" shape="circle"> {iconTwitter} </Button>
                            </Tooltip>
                            <Tooltip title="youtube.com/ozanaydin">
                                <Button onClick={() => window.open( 'http://www.youtube.com/ozanaydin')} style={{ width:60, height:60, margin:50 }} type="link" ghost size="large" shape="circle"> {iconYoutube} </Button>
                            </Tooltip>
                            <Tooltip title="facebook.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.facebook.com/ozanaydin9')} style={{ width:60, height:60, margin:50 }} type="link" ghost size="large" shape="circle"> {iconFacebook} </Button>
                            </Tooltip>
                        </bg>
                        <p className="cssDisplay d-none d-sm-block">Ozan Aydın</p>

                    </div>

                </Content>
                <Footer style={{backgroundColor:'#AF5C7D'}} className="footer">Ozan Aydın ©2019</Footer>
            </Layout>

        );
    }
}export default MainPage;