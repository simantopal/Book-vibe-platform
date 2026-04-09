import React from 'react';
import bookImg from '../../assets/hero-bg.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-12 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                src={bookImg}
                />
                <div className=''>
                    <h1 className="text-5xl font-bold mb-12">Books to freshen up<br></br> your bookshelf</h1>
                    <button className="btn bg-green-500 rounded-sm">View The List</button>
                </div>
            </div>
            </div>
    );
};

export default Banner;