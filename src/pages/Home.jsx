import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title="Up Comming" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID='3' title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID='4' title="Action Movies" fetchURL={requests.requestActionMovies} />
      <Row rowID='5' title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID='6' title="Horror Movies" fetchURL={requests.requestHorrorMovies} />
    </div>
  );
}

export default Home;
