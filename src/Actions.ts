import { IACtion, IEpisode, IEpisodeProps, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const res = await fetch(URL);
  const data = await res.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: data._embedded.episodes,
  });
};

export const toggleFavorites = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IACtion => {
  const episodeInFavorite = state.favorites.includes(episode);

  let dispatchObj = {
    type: 'ADD_FAVORITE',
    payload: episode,
  };

  if (episodeInFavorite) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: 'REMOVE_FAVORITE',
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
