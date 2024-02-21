import React from 'react';
import { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import CategorySkeleton from "../../components/Category/CategorySkeleton";

import './SeriesLibrary.css';

const SeriesLibrary = () => {
  
  const fetcher = new APIFetch();
  const [response, setResponse] = useState({
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = JSON.parse(localStorage.getItem("series")) || [];
      const seriesData = await Promise.all(
        db.map((sid) => fetcher.fetchSeriesById(sid, 1))
      );
      setResponse({
        series: seriesData,
      });
    };

    fetchData();
  }, []);

  return response.series && response.series.length > 0 ? (
    <div id="main">
      <Category data={response.series} name="Series" type={"series"} />
    </div>
  ) : (
    <>
      <CategorySkeleton />
      <CategorySkeleton />
    </>
  );

}

export default SeriesLibrary