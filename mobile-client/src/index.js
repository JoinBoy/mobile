import React from 'react';
import ReactDOM from 'react-dom';
import {FindMusic} from "./index/FindMusic";
import {mui,$} from "./value";

class App extends React.Component{
	componentWillMount(){
		
	};
	componentDidMount(){
		this.htmlInit();	
	};
	//初始化设定页面font-size;
	htmlInit(){
		var screenWidth = document.body.clientWidth;
		$("html").attr("style","font-size:"+(screenWidth/15)+'px');
	};
	render(){
		return (
			<div>
                <FindMusic/>
                <nav className="mui-bar mui-bar-tab bgColorWhite">
                    <a className="mui-tab-item mui-active " href="#tabbar" >
                        <span className="mui-icon mui-icon-search"></span>
                        <span className="mui-tab-label">发现音乐</span>
                    </a>
                    <a className="mui-tab-item" href="#tabbar-with-chat">
                        <span className="mui-icon mui-icon-starhalf"></span>
                        <span className="mui-tab-label">我的音乐</span>
                    </a>
                    <a className="mui-tab-item" href="#tabbar-with-sms">
                        <span className="mui-icon mui-icon-chatboxes"></span>
                        <span className="mui-tab-label">朋友</span>
                    </a>
                    <a className="mui-tab-item" href="#tabbar-with-map">
                        <span className="mui-icon mui-icon-compose"></span>
                        <span className="mui-tab-label">账号</span>
                    </a>
                </nav>       	
            </div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));
