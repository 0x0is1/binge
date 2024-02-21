import React from "react";
import Card from '../Card/Card';

import "./Category.css";

const Category = ({data, name, type}) => {
  return (
    <div className="category">
      <div className="category-name">{name}</div>
      <div className="items">
        {
          data && data.map((item, index)=>{
            return <Card key={index} data={item} type={type} />
          })
        }
      </div>
    </div>
  );
};

export default Category;
