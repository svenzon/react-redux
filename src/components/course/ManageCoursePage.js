import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./courseForm";

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}/>
            </div>
        );
    }
}

ManageCoursePage.PropTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);