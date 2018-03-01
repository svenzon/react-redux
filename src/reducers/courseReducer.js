import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS :
            // state.push(action.course); don't do it this way
            // return state;
            // return [...state,
            //     Object.assign({}, action.course)
            // ];
            return action.courses;

        default:
            return state;
    }
}