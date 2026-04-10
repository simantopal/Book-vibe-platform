// import React, { use } from 'react';
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';


const BookDetails = () => {
    const {bookId:bookParamsId} = useParams();
    const books = useLoaderData()
    const expectedBook = books.find(
        (book) => book.bookId === Number(bookParamsId));
        
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook

    const {handleMarkAsRead, handleWishList} = useContext(BookContext)

    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm my-13 container mx-auto">
            <figure className='w-full flex items-center justify-center bg-base-200 rounded-2xl py-10'>
                <img
                src={image}
                alt="Album" className='h-141' />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex items-center gap-2'>
                {
                    tags.map((tag, ind) => (<div key={ind} className="badge badge-success badge-soft font-medium">{tag}</div>
                ))
                }
                </div>
                <div className="border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number of pages: </span><span>{totalPages}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: </span><span>{publisher}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year of Publishing: </span><span>{yearOfPublishing}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: </span><span>{rating}</span>
                    </div>
                    <div className='flex items-center gap-2'>

                        <button className="btn" onClick={()=> handleMarkAsRead(expectedBook)}>Read</button>

                        <button className="btn btn-primary" onClick={()=>handleWishList(expectedBook)}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;