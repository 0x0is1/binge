import React from 'react';
import { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import CategorySkeleton from "../../components/Category/CategorySkeleton";

import './SeriesLibrary.css';

const SeriesLibrary = () => {
  
  const fetcher = new APIFetch();
  const [response, setResponse] = useState({
    movies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = JSON.parse(localStorage.getItem("series")) || [];
      const movieData = await Promise.all(
        db.map((sid) => fetcher.fetchSeries(sid, 1))
      );
      setResponse({
        movies: movieData,
      });
    };

    fetchData();
  }, []);

  return response.movies.length > 0 ? (
    <div id="main">
      <Category data={response.movies} name="Movies" type={"movie"} />
    </div>
  ) : (
    <>
      <CategorySkeleton />
      <CategorySkeleton />
    </>
  );

}

export default SeriesLibrary