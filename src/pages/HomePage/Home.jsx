import React from "react";
import { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import CategorySkeleton from "../../components/Category/CategorySkeleton";
import "./Home.css";

const Home = () => {
  const fetcher = new APIFetch();
  const [response, setResponse] = useState({
    movies: null,
    series: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      const mdata = await fetcher.home_movies(1);
      const sdata = await fetcher.home_series(1);

      setResponse({
        movies: mdata,
        series: sdata,
      });
    };
    fetchData();
  }, []);
  return response.movies ? (
    <div id="main">
        <Category
          data={response.movies.results}
          name="Top Movies"
          type={"movie"}
        />
        <Category
          data={response.series.results}
          name="Top TV Series"
          type={"series"}
        />
    </div>
  ) : (
    <>
      <CategorySkeleton />
      <CategorySkeleton />;
    </>
  );
};

export default Home;
