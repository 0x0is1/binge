import React from 'react';
import { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import CategorySkeleton from "../../components/Category/CategorySkeleton";
import './Seriess.css';

const Seriess = () => {

  const fetcher = new APIFetch();
  const [response, setResponse] = useState({
    series: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      const sdata = await fetcher.fetchSeriess(1);

      setResponse({
        series: sdata,
      });
    };
    fetchData();
  }, []);
  return response.series ? (
    <div id="main">
      <Category data={response.series.results} name="Series" type={"series"} />
    </div>
  ) : (
    <>
      <CategorySkeleton />
      <CategorySkeleton />;
    </>
  );

}

export default Seriess