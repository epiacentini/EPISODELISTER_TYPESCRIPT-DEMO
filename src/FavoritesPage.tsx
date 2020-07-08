import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';
import { toggleFavorites } from './Actions';
import { IEpisodeProps } from './interfaces';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavoritesPage() {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavorites,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="episodes-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
