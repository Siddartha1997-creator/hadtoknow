import React from 'react';
import './SeasonDisplay.css';

	

const seasonConfig={
	summer:{text: "Let's hit the beach", iconName: "sun" },
	winter:{text: "Burr its chilly", iconName: "snowflake"}
};


const getSeason=(lat,month)=>{
		if(month>=4 && month<=9 ){
				return lat>0?'summer':'winter';
					}

	else{
	return lat>0?'winter':'summer';
	}

}

const SeasonDisplay=(props)=>{
	const season=getSeason(props.lat,new Date().getMonth()+1);
	const {text,iconName}= seasonConfig[season];

	return( 
		<div className={`season-display ${season}`}>
		<i className={` icon-left massive ${iconName} icon`}/>

		<h1>{text}</h1>

		<i className={` icon-right massive ${iconName} icon`}/>
		</div>
		);
	};

export default SeasonDisplay;
