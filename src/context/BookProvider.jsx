import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utilites/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());


    // useEffect(()=> {
    //    const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //    console.log(getReadListFromLocalDB, "getReadListFromLocalDB");
    //    setReadList(getReadListFromLocalDB)
    // }, [])

    const handleMarkAsRead = (currentBook) => {
        addReadListToLocalDB(currentBook);

        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId)

        if(isExistBook){
            toast.error("The book is already exist")
        }else{
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
        console.log(currentBook, readList, "book")
    }

    const handleWishList = (currentBook) => {
        addWishListToLocalDB(currentBook);

        const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId);
        if(isExistInReadList){
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if(isExistBook){
            toast.error("The book is already exist")
        }else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
        console.log(currentBook, readList, "book")
    };

    const data = {readList, setReadList, handleMarkAsRead, wishList, setWishList, handleWishList};

    return <BookContext.Provider value={data}>
                {children}
    </BookContext.Provider>
};

export default BookProvider;