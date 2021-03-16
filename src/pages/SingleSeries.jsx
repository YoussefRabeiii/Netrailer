import React from "react";
import { useParams } from "react-router-dom";

import "../css/singleSeries.css";
const SingleSeries = () => {
  const { seriesURL } = useParams();
  const seriesURLArr = seriesURL.split("-");
  const seriesID = seriesURLArr[seriesURLArr.length - 1];

  console.log(seriesID);

  return (
    <main>
      <h1>Single Series</h1>
    </main>
  );
};

export default SingleSeries;
