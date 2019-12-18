export const SEARCH = "SEARCH";
export const SEARCH_RESULTS = "SEARCH RESULTS";

type SearchAction = {
  type: typeof SEARCH;
  payload: {
    term: string;
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

export const searchAction = (term: string): SearchAction => {
  return {
    type: SEARCH,
    payload: {
      term
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

export type Action = SearchAction | SearchResultsAction;
