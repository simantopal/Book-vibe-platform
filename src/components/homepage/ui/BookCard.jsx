import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className='p-6 bg-base-200 m-6 rounded-2xl'>
                <img src={book.image} alt={book.bookName} className='rounded-xl h-64' />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-3'>
                    {book.tags.map((tag, ind) => (<div key={ind} className="badge badge-success badge-soft font-medium">{tag}</div>
                    ))}
                </div>
                    <h2 className="card-title text-2xl">{book.bookName}</h2>
                    <p className='font-medium text-lg mb-4'>By: {book.author}</p>

                <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-4 text-xl">
                    <div className='font-medium'>{book.category}</div>
                    <div className='font-medium flex gap-2 items-center'>{book.rating}<FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;