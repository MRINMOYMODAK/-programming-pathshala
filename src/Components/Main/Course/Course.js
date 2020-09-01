import React from 'react';
import '../../../bootstrap/dist/css/bootstrap.min.css';
import './Course.css'

const Course = (props) => {
    const {img, course_name, instructor, price} = props.course;
    return (
        <div className='row mr-3' >
            <div className='col-4'>
                <div className='photo py-4'>
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className='col-8'>
                <div className='course-details m-2 p-3'>
                    <h4>{course_name}</h4> <br/>
                    <p>by : {instructor}</p>
                    <p>$ {price}</p>
                    <button onClick={ () =>  props.courseCount(props.course)} className='btn btn-success'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;