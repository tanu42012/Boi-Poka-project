const getStoreBook=()=>{
    const storedBookSTR=localStorage.getItem('readList');
    if(storedBookSTR){
        const storeBookData=JSON.parse(storedBookSTR);
        return storeBookData;
    }
    else{
        return [];

    }

}
const addToStoreDB=(id)=>{
    const storeBookData=getStoreBook();
    if(storeBookData.includes(id)){
        console.log('hello');
        alert('vai ai id already exit');
    }
    else{
        storeBookData.push(id);
        // console.log(storeBookData);
        const data=JSON.stringify(storeBookData);
        localStorage.setItem('readList', data);
    }

}
export{addToStoreDB,getStoreBook};

