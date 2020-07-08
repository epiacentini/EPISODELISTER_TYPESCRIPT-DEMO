import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';
import { IACtion, IEpisode, IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavorites } from './Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavorites,
    favorites: state.favorites,
  };

  return (
    <Fragment>
      {' '}
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episodes-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </Fragment>
  );
}
