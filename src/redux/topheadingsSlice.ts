import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle } from "../shared/models";
import * as api from "../shared/api";
import * as _ from "lodash";

export type InitialState = {
  topHeadingsSource: NewsArticle[] | null;
  topHeadingsCategory: NewsArticle[] | null;
  error: boolean;
};

const initialState: InitialState = {
  topHeadingsSource: null,
  topHeadingsCategory: null,
  error: false,
};

const topheadingsReducer = createSlice({
  name: "topheadings",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // case when fetch news on top headings by source succeded
    builder.addCase(
      fetchNewsBySource.fulfilled,
      (state, action: PayloadAction<NewsArticle[]>) => {
        // make a variable for news articles received
        const news = action.payload;
        if (news && !_.isEqual(state.topHeadingsSource, news)) {
          state.topHeadingsSource = news;
        }
      }
    );
    // case when fetch news on top headings by source failed
    builder.addCase(fetchNewsBySource.rejected, (state, action) => {
      state.error = true;
      alert("Error " + action.error.message);
    });
    // case when fetch news on top headings by category succeded
    builder.addCase(
      fetchNewsByCategory.fulfilled,
      (state, action: PayloadAction<NewsArticle[]>) => {
        // make a variable for news articles received
        const news = action.payload;
        if (news && !_.isEqual(state.topHeadingsCategory, news)) {
          state.topHeadingsCategory = news;
          state.error = false;
        }
      }
    );
    // case when fetch news on top headings by category failed
    builder.addCase(fetchNewsByCategory.rejected, (state, action) => {
      state.error = true;
      alert("Error " + action.error.message);
    });
  },
});

export default topheadingsReducer.reducer;

// create async thunk method for fetching news by source
export const fetchNewsBySource = createAsyncThunk(
  "topheadlines/fetch/source",
  async (source: string) => {
    const response = await api.getFakeHeadlines(source);
    // const response = await api.getHeadlinesBySource(source);
    return response;
  }
);

// create async thunk method for fetching news by category
export const fetchNewsByCategory = createAsyncThunk(
  "topheadlines/fetch/category",
  async (category: string) => {
    //const response = await api.getFakeHeadlines(category);
    const response = await api.getHeadlinesByCategory(category);
    return response;
  }
);
