import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE :
            // state.push(action.course); don't do it this way
            // return state;
            debugger;
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}