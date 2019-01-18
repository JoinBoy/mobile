import React from 'react';
import "./FindMusic.css";
import FindMusicBody from "./FindMusicBody/FindMusicBody";
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
import MovieBody from './MovieBody/MovieBody';
class FindMusic extends React.Component{
	componentDidMount(){
		this.navBind();
	}
	//给音乐、视频、电台绑定事件
	navBind(){
//		var item1 = document.getElementById('myMusic');
		var item2 = document.getElementById('myMovie');
		var item3 = document.getElementById('myRadio');
		var elements = document.getElementsByClassName('mui-control-item');
		for(var value of elements)(
			value.addEventListener('click', function(e) {
				if (this.id === "myMusic") {
						setTimeout(function() {
							window.location.href="/myMusic"
						}, 500);

				} else if (this.id === "myMusic") {
					if (item2.querySelector('.mui-loading')) {
						setTimeout(function() {						
						}, 500);
					}
				} else if (this.id === "myMusic") {
					if (item3.querySelector('.mui-loading')) {
						setTimeout(function() {							
						}, 500);
					}
				}
			})
		)
		
		
	}
	
	
    render(){
        return (
        	<div>
        		<header className="mui-bar mui-bar-nav mui-badge-red">
                    <span className=" mui-icon mui-icon-mic mui-pull-left colorWhite"></span>
                    <div className="mui-title">
                        <input type="search" className="mui-input-speech bgColorWhite" placeholder="请输入要搜索的歌曲名"/>
                    </div>
                    <span className="mui-icon mui-icon-settings mui-pull-right colorWhite"></span>
                </header>
				<BrowserRouter>
					<div>
						<div className="navClassBox">
							<NavLink className="navClass" activeClassName="activeNavClass" to="/myMusic">音乐</NavLink>
							<NavLink className="navClass" activeClassName="activeNavClass" to="/myMovie">视频</NavLink>
							<NavLink className="navClass" activeClassName="activeNavClass" to="/myRadio">电台</NavLink>
						</div>
						<Route exact path="/myMusic" component={FindMusicBody}></Route>
						<Route path="/myMovie" component={MovieBody}></Route>
						<Route path="/myRadio" component={FindMusicBody}></Route>
					</div>
				</BrowserRouter>
        	</div>
        );
    };
}

export {FindMusic}
