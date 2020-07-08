export interface IEpisode {
  id: number;
  image: { medium: string };
  name: string;
  number: number;
  season: number;
}

export interface IACtion {
  type: string;
  payload: any;
}

export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: any };
  toggleFavorites: (state: IState, episode: IEpisode, dispatch: any) => IACtion;
  favorites: Array<IEpisode>;
}
