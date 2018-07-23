import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAll} from '../actions';
import _ from 'lodash';

class Posts extends React.Component{

	componentDidMount(){
		console.log("DID MOUNT");
		this.props.fetchAll();
	}

	renderPosts(){
		return _.map(this.props.posts,(post)=>{
			return (
				<li key={post._id} className="list-group-item list-group-item-heading"
				onClick={()=>{this.props.history.push(`/post/${post._id}`)}}
				>
				<h3>{post.title}</h3>
				<p>{post.message}</p>	
				</li>
				);
		});
	}

	render(){
		return (
			<div>
			<h3>Posts</h3>
			<ul className="list-group"> 
			{this.renderPosts()}
			</ul>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {posts:state.posts};
}

export default connect(mapStateToProps,{fetchAll})(Posts);