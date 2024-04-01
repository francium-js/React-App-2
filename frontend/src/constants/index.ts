export const FETCH_URL = import.meta.env.VITE_URL_BY_BACKEND

export enum FetchEndpoint {
  BOARD = '/board',
  SECTION = '/section',
  TASK = '/task',
  HISTORY_BOARD = '/history/board',
  HISTORY_TASK = '/history/task',
}
