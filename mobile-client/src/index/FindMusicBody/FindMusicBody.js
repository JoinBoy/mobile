import React from "react";
import {mui,$,httpUrl} from "../../value";
import "./FindMusicBody.css";
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
import {FindMusicBodyRecommend} from "./FindMusicBodyRecommend";
import PrivateFM from '../PrivateFM/PrivateFM';
class FindMusicBody extends React.Component{
	
	constructor(props) {
	    super(props);
	    this.getAjax = this.getAjax.bind(this);
	    this.state = {}
	 }

	componentWillMount(){
		
	}
	
	componentDidMount(){
		this.getAjax();
		this.bannerTime();
	}
	//定义轮播时间
	bannerTime(){
		var timer = mui("#banner");
		console.log(timer)
		setTimeout(function(){
			timer.slider({
			interval:3000
		});
		},3000)
		
	};
	/*异步请求数据*/
	getAjax(){
		var that = this;
		$.ajax({
			url:httpUrl+'/findMusicBody',
			type:'GET',
			data:{},
			success:function(res){
				that.setState({
					f:res.f
				})
				const listItems = that.state.f.map((ee,i) =>
							<div className='mui-slider-item' key={i}>
								<img className=" bannerImgSize" alt="轮播图" src={ee.bannerimg} />
							</div>
					)
				that.setState({
					w:listItems
				})
			}
		})
	};
	render(){
		if(this.state.f){
			var bannerFirst= <div className='mui-slider-item mui-slider-item-duplicate'>
						<img className=" bannerImgSize" alt="轮播图" src={this.state.f[0].bannerimg} />
					 </div>;
			var bannerLast = <div className='mui-slider-item mui-slider-item-duplicate'>
						<img className=" bannerImgSize" alt="轮播图" src={this.state.f[this.state.f.length-1].bannerimg} />
					 </div>
		}
		return(
			<div className="FindMusicBody">
				<div className="mui-slider" id="banner">
		  			<div className="mui-slider-group mui-slider-loop" >
		  				{bannerFirst}
					{/*上边为循环图片*/}
						{this.state.w}
					{/*下边为循环图片*/}
						{bannerLast}
					</div>
					<div className="mui-slider-indicator">
						<div className="mui-indicator mui-active"></div>
						<div className="mui-indicator"></div>
						<div className="mui-indicator"></div>
					</div>
				</div>
				
				<BrowserRouter>
					<div>
						<div className="centerNav">
							<NavLink className="centerItem" to="/aa1">
								<img alt="私人FM" src="data:image/png;base64,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" />
								<div>私人FM</div>
		 					</NavLink>
							<NavLink className="centerItem" to="/aa1">
								<img alt="每日推荐" src="data:image/png;base64,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" />
								<div>每日推荐</div>
							</NavLink>
							<NavLink className="centerItem" to="/aa1">
								<img alt="歌单" src="data:image/png;base64,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" />
								<div>歌单</div>
							</NavLink>
							<NavLink className="centerItem" to="/aa1">
								<img alt="排行榜" src="data:image/png;base64,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" />
								<div>排行榜</div>
							</NavLink>
						</div>
						<div>
							<Route exact path="/aa1" component={PrivateFM}></Route>
						</div>				
					</div>
				</BrowserRouter>
				
				
				
				
				<FindMusicBodyRecommend/>
				<FindMusicBodyRecommend/>
			</div>				
		)
	}
	
}
export default FindMusicBody;
