import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';
import { IACtion, IEpisode, IEpisodeProps } from './interfaces';
import { Link } from '@reach/router';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div className="links">
          <Link to="/" style={{ marginRight: '20px' }}>
            Home
          </Link>
          <Link to="/faves">Favorites: {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}
