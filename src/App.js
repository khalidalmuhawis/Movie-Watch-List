import React, { useState } from "react";

import Input from "./components/Input";

import MovieList from "./components/MovieList";


function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState(["Jumanji"]);
  const moveToWatched = m => {
    let newWatchlist = watchlist.filter(movie => movie !== m);
    setWatchlist(newWatchlist);
    setWatched(watched.concat([m]));
  };
  const moveToWatchList = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    setWatchlist(watchlist.concat([m]));
  };
  const deleteMovie = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    let newWatchlist = watchlist.filter(movie => movie !== m);
    setWatchlist(newWatchlist);
  };
  return (
    <div>
    <Input watchlist={watchlist} setWatchlist={setWatchlist} />
    <MovieList
      list={watchlist}
      move={moveToWatched}
      moveTo="Watched"
      deleteMovie={deleteMovie}
      listType="Watchlist"
    />
    
    <p>______________</p>
    <MovieList
      list={watched}
      move={moveToWatchList}
      moveTo="WatchList"
      deleteMovie={deleteMovie}
      listType="Watched"
    />
    
  </div>
  );
}

export default App;
