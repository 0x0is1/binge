import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import APIFetch from "../../utils/APIFetch";
import "./Card.css";

const Card = ({ data, type }) => {
  const fetcher = new APIFetch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem(type)) || [];
    setLiked(db.includes(data.id));
  }, [data.id, type]);

  function handleCard() {
    navigate(`/${type}/${data.id}`);
  }

  function handleLiked() {
    const db = JSON.parse(localStorage.getItem(type)) || [];
    if (!liked) {
      db.push(data.id);
    } else {
      const index = db.indexOf(data.id);
      if (index !== -1) {
        db.splice(index, 1);
      }
    }
    localStorage.setItem(type, JSON.stringify(db));
    setLiked(!liked);
  }

  function handleImageLoad() {
    setImageLoaded(true);
  }

  return (
    <div className="card" id={data.id} type={type}>
      <div className="album-image">
        <svg
          className="card-play"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={liked ? "#db5d5d" : "white"}
          viewBox="0 -960 960 960"
          onClick={handleLiked}
        >
          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
        </svg>
        {data.poster_path ? (
          <img
            onClick={handleCard}
            src={fetcher.image(data.poster_path)}
            alt="track banner"
            onLoad={handleImageLoad}
            className={imageLoaded ? "loaded" : ""}
          />
        ) : (
          <Skeleton variant="rectangular" width={141} height={141} />
        )}
      </div>
      {!imageLoaded && <Skeleton variant="text" width={160} height={24} />}
      {!imageLoaded && <Skeleton variant="text" width={160} height={20} />}
      {imageLoaded && (
        <div className="track-name">
          {data.title ? data.title : data.original_name}
        </div>
      )}
      {imageLoaded && (
        <div className="artists">
          {data.vote_average.toString().slice(0, 3)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="gold"
          >
            <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Card;
