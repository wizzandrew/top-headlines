import { useAppDispatch } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";

export default function useFetchHook() {
  const dispatch = useAppDispatch();

  const fetchNewsByCategory = async (category: string) => {
    console.log("fetching news for: " + category);
    dispatch(topHeadingsSlice.fetchNewsByCategory(category));
  };

  const dispatchSetTopHeadingsCurrent = (
    current: topHeadingsSlice.TopHeadingsCategoryTypes
  ) => {
    dispatch(topHeadingsSlice.setTopHeadingsCategoryCurrent(current));
  };

  return { fetchNewsByCategory, dispatchSetTopHeadingsCurrent };
}
