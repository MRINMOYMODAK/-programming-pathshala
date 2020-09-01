import React from 'react';

import '../../../bootstrap/dist/css/bootstrap.min.css';
const Cart = (props) => {
    console.log(props.count);
    const courses = props.count;
    const totalCost = courses.reduce( (totalCost, course) => totalCost + Number(course.price), 0);
    const finalCost = totalCost.toFixed(2);
    return (
        <div>
            <h1 className='text-center text-success' >Cart</h1>
            <h5>You have purchased {courses.length} course.</h5>
            <h5><small>Total Fee : $ {finalCost}</small></h5>
        </div>
    );
};

export default Cart;