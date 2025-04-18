import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../../Utility/addToDB.JS';

const BookDetails = () => {
    const {id}=useParams();
    // console.log(id);
    const bookId=parseInt(id);
    const data=useLoaderData();
    // console.log(data);
    const singleBook= data.find(book=>book.bookId===bookId);
    // console.log(singleBook);
    // console.log( id,data);
    const {bookName,image}=singleBook || {};
    const handleMarkAsRead=(id)=>{
        addToStoreDB(id)
        


    }
    return (
        <div className=' w-2/3'>
           <img className='w-48' src={image} alt="" />
           <h5>{bookName}</h5>
           <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark asRead</button>
           <button className="btn btn-info m-2"> Add To wishlist</button>
        </div>
    );
};

export default BookDetails;