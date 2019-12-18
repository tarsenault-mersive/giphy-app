import { searchAction } from "./actions";
import { useDispatch } from "react-redux";

export const useSearch = () => {
  const dispatch = useDispatch();

  const search = (term: string) => {
    dispatch(searchAction(term));
  };

  return {
    search
  };
};
