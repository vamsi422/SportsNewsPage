import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchNews = () => {
  const [news, setNews] = useState([]);
  function getData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aaa331953a064ae3b141fe45232c0871"
      )
      .then((data) => {
        console.log(data.data.articles);
        setNews(data.data.articles);
      });
  }
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return (
    <>
      {news.map((value, i) => {
        return (
          <div className="news_card" kry={Math.random * 12345}>
            <img
              key={Math.random * 1000000}
              src={value.urlToImage}
              alt="image not found -("
              // onError='this.src="../../public/—Pngtree—confused man vector_7489985.png"'
            />
            <h2 key={Math.random * 1000000}>
              {value.title} [{value.source.name}]
            </h2>
            <p>{value.description}</p>
            <h4>
              -{value.author}[ at {value.publishedAt} ]
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default FetchNews;
