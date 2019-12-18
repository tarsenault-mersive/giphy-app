import { searchAction, likeGifAction } from "./actions";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();
  const search = (term: string, weirdness: number) => {
    dispatch(searchAction(term, weirdness));
  };
  const likeGif = () => {
    dispatch(likeGifAction());
  };

  return {
    search,
    likeGif
  };
};
