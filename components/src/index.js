import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App =()=> {


return (
	
	<div className= "ui container comments">
		<ApprovalCard>
		<CommentDetail profileImage={faker.image.avatar()}  author="Sam" time="Today at 4:45 pm" contentText="Great Blog" />
		</ApprovalCard>
		<ApprovalCard>
		<CommentDetail profileImage={faker.image.avatar()}  author="alex" time="Today at 2:00AM" contentText="Great Blog"/>
		</ApprovalCard>
		<ApprovalCard>
		<CommentDetail profileImage={faker.image.avatar()} author="jake" time="Today at 5:00PM" contentText="Great Blog"/>
		</ApprovalCard>
	</div>

);
};


ReactDOM.render(<App/>, document.querySelector('#root'));
