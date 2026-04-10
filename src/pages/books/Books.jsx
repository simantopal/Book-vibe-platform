import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedbooks/ListedReadList';
import ListedWishList from '../../components/listedbooks/ListedWishList';

const Books = () => {
    const [sortingType, setSortingType] = useState("");
    console.log(sortingType, "sorting")

    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-center my-3'>
                <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort by: {sortingType} ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> setSortingType('pages')}><a>Pages</a></li>
                    <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
                </ul>
            </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;