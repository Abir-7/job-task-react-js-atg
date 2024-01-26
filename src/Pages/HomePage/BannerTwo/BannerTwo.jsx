import React from 'react';
import people from '../../../assets/people2.png'
const BannerTwo = () => {
    return (
        <div className='pt-4 py-4 mx-0 mx-md-5 '>
            <div className=''>
                <div className='fs-4 fw-bold'>Your <span className='text-primary'>Hobby</span>, Your <span className='text-secondary'>Community...</span></div>
                <div className='my-4'><button className='btn btn-primary'>Get Started</button></div>
            </div>
            <div><img className='w-100' src={people} alt="" /></div>
        </div>
    );
};

export default BannerTwo;