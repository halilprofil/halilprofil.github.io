"use client"

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const { products } = data;


        console.log(products);
        setData(products);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();

  }, []);


  return (
    <>
      <div className="product-container">

        {data.map(x =>
          <div>
            <img src={x.thumbnail} />
            <p>{x.title}</p>
            <span>{x.price}</span>
            <p>{x.description}</p>
            <Link href={"/buy/" + x.id}>Satın Al </Link>
          </div>
        )}
        
      </div>
    </>

  )
}
