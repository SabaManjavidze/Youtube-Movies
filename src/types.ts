export type Episode = {
  id?: string;
  epName: string;
  epNumber: string;
  url?: string;
};

export interface AdjaraMovie {
  id: number;
  type: string;
  adjaraId: number;
  originalName: string;
  primaryName: string;
  secondaryName: string;
  tertiaryName: string;
  primaryDescription: string;
  secondaryDescription: string;
  tertiaryDescription: string;
  poster: string;
  isTvShow: boolean;
  isAdult: boolean;
  isFree: boolean;
  year: number;
  weight: number;
  rating: Rating;
  highlights?: HighlightsEntity[] | null;
  posters: Posters;
  covers: Covers;
  actors: Actors;
  countries: Countries;
  languages: Languages;
  trailer?: null;
  plots: Plots;
  genres: Genres;
  lastSeries: LastSeries;
}
export interface Rating {
  imdb: ImdbOrImovies;
  imovies: ImdbOrImovies;
}
export interface ImdbOrImovies {
  score: number;
  voters: number;
}
export interface HighlightsEntity {
  field: string;
  value: string;
}
export interface Posters {
  data: PostersData;
}
export interface PostersData {
  240: string;
  400: string;
}
export interface Covers {
  data: CoversData;
}
export interface CoversData {
  145: string;
  367: string;
  510: string;
  1050: string;
  1920: string;
}
export interface Actors {
  data?: ActorEntity[] | null;
}
export interface ActorEntity {
  id: number;
  originalName: string;
  primaryName: string;
  secondaryName: string;
  tertiaryName: string;
  poster: string;
  birthDate: string;
  birthPlace: string;
  deathDate: string;
  deathPlace: string;
  height: number;
  slogan: string;
  zodiacSign: string;
}
export interface Countries {
  data?: CountryEntity[] | null;
}
export interface CountryEntity {
  id: number;
  primaryName: string;
  secondaryName: string;
  tertiaryName: string;
}
export interface Languages {
  data?: LanguageEntity[] | null;
}
export interface LanguageEntity {
  code: string;
  primaryName: string;
  primaryNameTurned: string;
  tertiaryName: string;
  secondaryName: string;
}
export interface Plots {
  data?: PlotData[] | null;
}
export interface PlotData {
  description: string;
  language: string;
}
export interface Genres {
  data?: null[] | null;
}
export interface LastSeries {
  data: LastSeriesData;
}
export interface LastSeriesData {
  season: number;
  episode: number;
}

export type Movie = {
  slug: string;
  title: string;
  thumbnail_url: string;
  url?: string;
  movieType: MovieType;
};
export type VideoObj = {
  video: string;
  quality: string | "1080p" | "720p" | "480p";
};

export type MovieType = "series" | "movies";

// ----------------------------------------------------------------
export interface MovieDetails {
  id: number;
  adjaraId: number;
  primaryName: string;
  secondaryName: string;
  tertiaryName: string;
  originalName: string;
  year: number;
  releaseDate: string;
  imdbUrl: string;
  isTvShow: boolean;
  budget: string;
  income: string;
  duration: number;
  adult: boolean;
  parentalControlRate: string;
  watchCount: number;
  canBePlayed: boolean;
  regionAllowed: boolean;
  packAllowed: boolean;
  isFree: boolean;
  cover: Cover;
  poster: string;
  rating: Rating;
  hasSubtitles: boolean;
  languages: Languages;
  posters: Posters;
  covers: Covers;
  plot: Plot;
  plots: Plots;
  genres: Genres;
  tvcom: Tvcom;
  seasons: Seasons;
  akaNames: AkaNames;
}
export interface Cover {
  small: string;
  large: string;
}
export interface Plot {
  data: DataOrDataEntity;
}
export interface DataOrDataEntity {
  description: string;
  language: string;
}
export interface Tvcom {
  data: Data2;
}
export interface Data2 {
  url: string;
}
export interface Seasons {
  data?: SeasonType[] | null;
}
export interface SeasonType {
  movieId: number;
  number: number;
  name: string;
  episodesCount: number;
  upcomingEpisodesCount: number;
}
export interface AkaNames {
  data?: DataEntity3[] | null;
}
export interface DataEntity3 {
  type: string;
  name: string;
}

export interface EpisodeType {
  episode: number;
  episodes_include: string;
  title: string;
  description: string;
  rating: number;
  upcoming: boolean;
  file_will_be_added_soon: boolean;
  air_date?: null;
  poster: string;
  covers: Covers;
  files?: FilesEntity[] | null;
}
export interface FilesEntity {
  lang: LangType;
  files?: EpisodeFileType[] | null;
  subtitles?: SubtitlesEntity[] | null;
}

export type QualityType = "HIGH" | "MEDIUM";
export type LangType = "ENG" | "GEO" | string;
export interface EpisodeFileType {
  id: number;
  quality: QualityType;
  src: string;
  duration: number;
  thumbnails?: ThumbnailsEntity[] | null;
}
export interface ThumbnailsEntity {
  id: number;
  url: string;
  start_time: number;
  end_time: number;
  duration: number;
  interval: number;
  width: number;
  height: number;
  columns: number;
}
export interface SubtitlesEntity {
  lang: string;
  url: string;
}
