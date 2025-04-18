import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../../Utility/addToDB.JS';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import React from 'react';

 

// const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';

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

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   });
        toast("Wow so easy!");
        addToStoreDB(id)
        


    }
    return (
        <div className=' w-2/3'>
           <img className='w-48' src={image} alt="" />
           <h5>{bookName}</h5>
           <ToastContainer />ssss
           <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark asRead</button>
           <button className="btn btn-info m-2"> Add To wishlist</button>
        </div>
    );
};

export default BookDetails;