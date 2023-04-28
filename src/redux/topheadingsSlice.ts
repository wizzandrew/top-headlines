import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle } from "../shared/models";
import * as api from "../shared/api";

export type InitialState = {
  topHeadings: NewsArticle[] | null;
};

const initialState: InitialState = {
  topHeadings: null,
};

const topheadingsReducer = createSlice({
  name: "topheadings",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      // case when fetch news on top headings by source succeded
      fetchNews.fulfilled,
      (state, action: PayloadAction<NewsArticle[]>) => {
        // make a variable for news articles received
        const news = action.payload;
        if (news) {
          state.topHeadings = news;
        }
      }
    );
  },
});

export default topheadingsReducer.reducer;

// create async thunk method for fetching news by source
export const fetchNews = createAsyncThunk(
  "topheadlines/fetch",
  async (source: string) => {
    const response = await api.getFakeHeadlines(source);
    // const response = await api.getHeadlinesBySource(source);
    return response;
  }
);
