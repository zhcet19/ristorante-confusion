import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments=(state={ errMess: null, comments:[]} ,action)=>{
	switch (action.type) {
			
		case ActionTypes.ADD_COMMENT:
			 return {...state, errMess: null, comments: action.payload};
		
		case ActionTypes.COMMENTS_FAILED:
           return {...state, errMess: action.payload};
			
			var comment=action.payload
			
			return { ...state, comments: state.comments.concat(comment)};
			
        default:
          return state;
      }
	
	
}