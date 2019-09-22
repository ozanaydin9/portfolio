import React from 'react';
import '../MainPage.css';
import Header from "../header/HeaderC";
import {Button, Icon, Layout} from "antd";
import Pdf from '../resume.pdf';
import { Tooltip } from 'antd';

const { Content, Footer } = Layout;


class About extends React.Component{


    render(){


        const iconGithub = <Icon type="github" style={{ fontSize: '50px'}} />;
        const iconLinkedin = <Icon type="linkedin" style={{ fontSize: '50px'}} />;
        const iconInstagram = <Icon type="instagram" style={{ fontSize: '50px'}} />;
        const iconTwitter = <Icon type="twitter" style={{ fontSize: '50px'}} />;
        const iconYoutube = <Icon type="youtube" style={{ fontSize: '50px'}} />;
        const iconFacebook = <Icon type="facebook" style={{ fontSize: '50px'}} />;
        const iconFilePdf = <Icon type="file-pdf" style={{ fontSize: '70px'}} />;
        const iconMail = <Icon type="mail" style={{ fontSize: '50px'}} />;
        return (


            <Layout className="layout">
                <Header selected="about"/>

                <Content>

                    <div className="contentdiv2">
                        <bg className="buttons">

                            <Tooltip title="github.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.github.com/ozanaydin9')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle" >{iconGithub}</Button>
                            </Tooltip>
                            <Tooltip title="linkedin.com/in/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.linkedin.com/in/ozanaydin9')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle">{iconLinkedin}</Button>
                            </Tooltip>
                            <Tooltip title="instagram.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.instagram.com/ozanaydin9')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle"> {iconInstagram} </Button>
                            </Tooltip>
                            <Tooltip title="twitter.com">
                                <Button onClick={() => window.open( 'http://www.twitter.com/')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle"> {iconTwitter} </Button>
                            </Tooltip>
                            <Tooltip title="youtube.com/ozanaydin">
                                <Button onClick={() => window.open( 'http://www.youtube.com/ozanaydin')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle"> {iconYoutube} </Button>
                            </Tooltip>
                            <Tooltip title="facebook.com/ozanaydin9">
                                <Button onClick={() => window.open( 'http://www.facebook.com/ozanaydin9')} style={{ width:50, height:50, margin:50 }} type="link" ghost size="large" shape="circle"> {iconFacebook} </Button>
                            </Tooltip>
                        </bg>
                        <p id={"cssDisplayResume"} > &nbsp;Resume <br/>
                            <Button onClick={() => window.open(Pdf)} style={{ width:70, height:70, margin:5 }} type="link" ghost size="large" shape="circle"> {iconFilePdf} </Button>
                        </p>

                            <Tooltip placement="bottom" title="ozanaydin9@gmail.com">
                                <Button onClick={() => window.open( "mailto:ozanaydin9@gmail.com")}style={{ width:50, height:50, margin:5 }} type="link" ghost size="large" shape="circle"> {iconMail} </Button>
                            </Tooltip>
                        

                    </div>

                </Content>

                <Footer style={{backgroundColor:'#AF5C7D' }} className="footer">Ozan Aydın ©2019</Footer>
            </Layout>

        )
    }
}
export default About;