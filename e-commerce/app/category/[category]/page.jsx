"use client"

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Category({ params }) {

const [data,setData] = useState([]);




    const {  category } = params;

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            const {products} = await response.json();
            setData(products);

            
        }

        getData();
      },[]);

  
return(
    <>
        <div className="product-container">

            {data.map(x =>
                <div>
                    <img src={x.thumbnail} />
                    <p>{x.title}</p>
                    <span>{x.price}</span>
                    <p>{x.description}</p>
                    <Link href={"/buy/"+ x.id}>Satın Al </Link>
                </div>
            )}

        </div>

    </>
)

}