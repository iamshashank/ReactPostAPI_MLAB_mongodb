import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import _ from 'lodash';

export default class PostNew extends React.Component{

	componentDidMount(){
		console.log("DID MOUNT");
		
	}

	render(){
		return (
			<div>
			New Form
			</div>
			);
	}
}

