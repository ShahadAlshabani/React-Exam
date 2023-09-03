import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

type products={
    title:string,
    description:string,
    price:number,
    image:string,
    id:string

}

function Cards() {

    const [productInfo, setProductInfo] = React.useState<products[]>([]);
    const {id} = useParams();
    React.useEffect(() => {
      
      getData()
       },[])

    const getData =()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {setProductInfo(response.data)
            console.log(response.data)});
       }

    

  return (
    <div>
        <div className='flex flex-row justify-center h-fit mt-10 gap-10 flex-wrap'>
    {productInfo.map((item) => {
    return (
        <a href={`/productDetails/${id}`}>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
   
        <img className="rounded-t-lg w-full h-44" src={item.image} alt="" />
    
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <p className="mb-3 font-normal text-gray-900 dark:text-white">{item.price} $</p>
        <a href="/cart" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
            Buy
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</a>

 );
})}


</div>

    </div>
  )
}

export default Cards