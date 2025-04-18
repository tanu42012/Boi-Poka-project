import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../../Utility/addToDB.JS';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList,setReadList]=useState([]);
    const [sort,setSort]=useState('');


    const data =useLoaderData();
    // console.log(data);
    useEffect(()=>{
    const storedBookData= getStoreBook();
    const convertedStoredBooks=storedBookData.map(id=>parseInt(id));
    // console.log(storedBookData);
    // console.log(convertedStoredBooks);
    const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId))
    console.log(myReadList);
    setReadList(myReadList)
    },[data])

    const handleSort=(type)=>{
      setSort(type);
      if(type==="pages"){
        const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
        console.log(sortedByPage);
        setReadList(sortedByPage);

      }

      if(type==="rating"){
        const sortByrating=[...readList].sort((a,b)=>a.rating-b.rating);
        console.log(sortByrating);
        setReadList(sortByrating);

      }
    }



    return (
        <div>
          <details className="dropdown">
  <summary className="btn m-1">Sort By:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('rating')}>rating</a></li>
  </ul>
</details>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read :{readList?.length}</h2>
      {
        readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;