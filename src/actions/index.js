import axios from 'axios';

export const FETCH_ALL = "FETCH_ALL";
export const FETCH_ID = "FETCH_ID";
export const DELETE_ID = "DELETE_ID";
export const CREATE_NEW = "CREATE_NEW";


const API_ROOT = 'http://localhost:3000';


export function fetchAll(){
	const request = axios.get(API_ROOT);
	return {
		type:FETCH_ALL,
		payload:request
	};
}

export function createPost(data,callback){
	const request = axios.post(API_ROOT+"/new",data).then(()=>{callback()});
	return {
		type:CREATE_NEW,
		payload:request
	};
}

export function fetchPost(id){
	const request = axios.get(`${API_ROOT}/post/${id}`);
	return {
		type:FETCH_ID,
		payload:request
	};
}

export function deletePost(id,callback){
	const request = axios.delete(API_ROOT+"/post/"+id).then(()=>{callback()});
	return {
		type:DELETE_ID,
		payload:request
	};
}
