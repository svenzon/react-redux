import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import toastr from "toastr";

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course.length) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;

    let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);