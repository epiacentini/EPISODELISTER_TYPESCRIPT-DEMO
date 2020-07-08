import React from 'react';
import { IACtion, IEpisode } from './interfaces';

export default function EpisodesList(props: any): JSX.Element[] {
  const { episodes, toggleFavorites, favorites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episodes-box">
        <img src={episode.image.medium} alt="" />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavorites(state, dispatch, episode)}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'UnFavorite'
              : 'Favorite'}
          </button>
        </section>
      </section>
    );
  });
}
