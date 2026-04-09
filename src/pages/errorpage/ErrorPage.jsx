import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
            
            <div className="text-center max-w-xl">
                
                {/* 404 Text */}
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-3">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                        Go Back Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;