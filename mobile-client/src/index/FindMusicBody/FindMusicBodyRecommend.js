import React from 'react';
import {FindMusicBodyRecommendItem} from './FindMusicBodyRecommendItem'
function FindMusicBodyRecommend(){
	return(
		<div>
			<div className="component">
				<div className="componentLeft"></div>
				<div className="compomentRight">推荐歌单&nbsp;&nbsp;></div>
			</div>
			<FindMusicBodyRecommendItem/>
		</div>
	)
}
export {FindMusicBodyRecommend}
