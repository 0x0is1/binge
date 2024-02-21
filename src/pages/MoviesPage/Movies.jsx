import React from 'react';
import { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import CategorySkeleton from "../../components/Category/CategorySkeleton";
import './Movies.css';

const Movies = () => {
  const fetcher = new APIFetch();
  const [response, setResponse] = useState({
    movies: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      const mdata = await fetcher.fetchMovies(1);

      setResponse({
        movies: mdata,
      });
    };
    fetchData();
  }, []);
  return response.movies ? (
    <div id="main">
      <Category
        data={response.movies.results}
        name="Movies"
        type={"movie"}
      />
    </div>
  ) : (
    <>
      <CategorySkeleton />
      <CategorySkeleton />;
    </>
  );
}

export default Movies