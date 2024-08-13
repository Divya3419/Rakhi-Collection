/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import style from "./Home.module.css";
export const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://rakhi-collections-5j05.onrender.com/shopping_results`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <h1 style={{style}}>
        Google Shopping Rakhi Collection
      </h1>
    <div style={{width:"80%", margin:"auto", display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"40px"}}>
      
      {data.map((ele) => {
        return (
          <>
            <div className={style.container} key={ele.product_id}>
              <h3>{ele.title}</h3>
              
              <p>Price: {ele.price}</p>
              <p>{ele.delivery}</p>
              {/* <img src={ele.thumbnail} alt="" /> */}
              <a href={ele.link} target="_blank">
                Buy From :{ele.source}
              </a>
            </div>
          </>
        );
      })}
    </div>
    </>
  );
};
