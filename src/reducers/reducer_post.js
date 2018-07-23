import {FETCH_ALL,FETCH_ID,DELETE_ID} from '../actions';
import _ from 'lodash';

export default function(state={},action){
	switch(action.type){
		case FETCH_ALL:
		return _.mapKeys(action.payload.data.posts,'_id');
		case FETCH_ID:
		return {...state,[action.payload.data._id]:action.payload.data};
		case DELETE_ID:
		return _.omit(state,action.payload);
	}
	return state;
}