import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import APIFetch from "../../utils/APIFetch";
import "./Series.css";

const Series = () => {
  const params = useParams();
  const fetcher = new APIFetch();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetcher.fetchSeriesById(params.sid, 1);
        setResponse(movieData);
      } catch (error) {
        console.error("Error fetching movie:", error);
        // Handle error
      }
    };

    fetchData();
  }, [params.sid]);

  const getRandomColor = () => {
    const colors = ["#78c2ad", "#f28c8c", "#f0bc61", "#8a4f7d", "#9e579d"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="movie-container" id="main">
      {response && (
        <>
          <div className="movie-poster">
            <img
              src={fetcher.image(response.backdrop_path)}
              alt={response.title ? response.title : response.original_name}
            />
          </div>
          <div className="movie-banner">
            <img
              src={fetcher.image(response.poster_path)}
              alt={response.title ? response.title : response.original_name}
            />
          </div>
          <div className="movie-details">
            <h1>{response.title ? response.title : response.original_name}</h1>
            <div className="genre-list">
              {response.genres.map((genre) => (
                <code
                  className="genre"
                  style={{ backgroundColor: getRandomColor() }}
                  key={genre.id}
                >
                  {genre.name}
                </code>
              ))}
            </div>
            <h3>{response.overview}</h3>
            <div className="movie-info">
              <p>
                <strong>Release Date:</strong> {response.last_air_date}
              </p>
              <p>
                <strong>Runtime:</strong> {response.episode_run_time[0]} mins
              </p>
              <p className="rating">
                <strong>Rating:</strong>{" "}
                {response.vote_average.toString().slice(0, 3)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="gold"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </p>
              <div className="companies">
                <marquee>
                  {response.production_companies.map(
                    (company) =>
                      company.logo_path !== null && (
                        <span key={company.id} className="company">
                          <img
                            src={fetcher.image(company.logo_path)}
                            alt={company.name}
                          />
                        </span>
                      )
                  )}
                </marquee>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Series;
