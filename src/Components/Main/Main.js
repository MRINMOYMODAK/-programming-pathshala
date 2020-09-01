import React, { useState } from 'react';
import './main.css';
import '../../bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Course from './Course/Course.js';
import Cart from './Cart/Cart.js';

const Main = () => {
    const [courses, setCourses] = useState([]);
    const courseCount = (course) => {
        const newCourses = [...courses, course];
        setCourses(newCourses);
    };
    return (
        <div className='main-container row'>
            <div className='col-9'>
                <div className='course-section'>
                    <h3 className='text-center text-info'>Courses</h3><hr/>
                    {
                        data.map(course => <Course courseCount={courseCount} course={course} key={course.id}></Course>)
                    }
                </div>
            </div>
            <div className='col-3'>
                <div className='cart-section'>
                    <Cart count={courses}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Main;