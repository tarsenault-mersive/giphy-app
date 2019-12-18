export const SEARCH = "SEARCH";
export const SEARCH_RESULTS = "SEARCH RESULTS";
export const LIKE_GIF = "LIKE GIF";

type SearchAction = {
  type: typeof SEARCH;
  payload: {
    term: string;
    weirdness: number;
  };
};
type SearchResultsAction = {
  type: typeof SEARCH_RESULTS;
  payload: {
    height: string;
    size: string;
    url: string;
    width: string;
  };
};
type LikeGifAction = {
  type: typeof LIKE_GIF;
};

export const searchAction = (term: string, weirdness: number): SearchAction => {
  return {
    type: SEARCH,
    payload: {
      term,
      weirdness
    }
  };
};

export const searchResultAction = (data: {
  height: string;
  size: string;
  url: string;
  width: string;
}): SearchResultsAction => ({
  type: SEARCH_RESULTS,
  payload: data
});

export const likeGifAction = () => ({
  type: LIKE_GIF
});

export type Action = SearchAction | SearchResultsAction | LikeGifAction;
