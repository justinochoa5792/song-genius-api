import React from "react";
import "./App.css";

const SongList = (props) => {
  const { list } = props;
  console.log(list);
  return (
    <div className="song-list">
      {list.map((songs) => {
        return (
          <ul key={songs.result.id}>
            <li>
              <img
                src={songs.result.song_art_image_thumbnail_url}
                alt={songs.result.title}
              />
            </li>
            <li>
              <a href={songs.result.url} target="_blank">
                {songs.result.title_with_featured}
              </a>
            </li>
            <li>{songs.result.artist_names}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default SongList;
