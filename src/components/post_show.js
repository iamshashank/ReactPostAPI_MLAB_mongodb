import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import _ from 'lodash';

class PostShow extends React.Component{

	componentDidMount(){
		console.log("DID MOUNT");
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
	}



	render(){
			if(!this.props.post){
				return <div>Loading</div>;
			}
		return (
			<div>
			<h1>{this.props.post.title}</h1>
			<p>{this.props.post.message}</p>
			</div>
			);
	}
}

function mapStateToProps(state,ownProps){
	return {post:state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost})(PostShow);

