import * as types from "../actions/actionTypes";


export default function courseReducer(state = [], action) {
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