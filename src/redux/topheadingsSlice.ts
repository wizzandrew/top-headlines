import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle } from "../shared/models";
import * as api from "../shared/api";
import * as _ from "lodash";
import { toast, ToastOptions } from "react-toastify";

export type TopHeadingsCategoryTypes =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology"
  | null;

export type InitialState = {
  topHeadingsSource: NewsArticle[] | null;
  topHeadingsCategory: NewsArticle[] | null;
  topHeadingsCategoryCurrent: TopHeadingsCategoryTypes;
  topHeadingsSearch: NewsArticle[] | null;
  searchFlag: boolean;
};

export type TranslateArticle = {
  title: string;
  description: string | null;
  content: string | null;
  topHeadingsType: "source" | "category" | "search";
};

export type TranslateArticleTitles = {
  articles: NewsArticle[];
};

export type TranslateArticleResult = TranslateArticle & { oldTitle: string };

const initialState: InitialState = {
  topHeadingsSource: null,
  topHeadingsCategory: null,
  topHeadingsCategoryCurrent: null,
  topHeadingsSearch: null,
  searchFlag: false,
};

// warning message properties
const toastProperties: ToastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const topheadingsReducer = createSlice({
  name: "topheadings",
  initialState: initialState,
  reducers: {
    activateSearchFlag(state) {
      state.searchFlag = true;
    },
    deactivateSearchFlag(state) {
      state.searchFlag = false;
    },
    setTopHeadingsCategoryCurrent(
      state,
      action: PayloadAction<TopHeadingsCategoryTypes>
    ) {
      const current = action.payload;
      state.topHeadingsCategoryCurrent = current;
    },
  },
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
      // display warning message
      toast.warn(action.error.message, toastProperties);
    });
    // case when fetch news on top headings by category succeded
    builder.addCase(
      fetchNewsByCategory.fulfilled,
      (state, action: PayloadAction<NewsArticle[]>) => {
        // make a variable for news articles received
        const news = action.payload;
        if (news && !_.isEqual(state.topHeadingsCategory, news)) {
          state.topHeadingsCategory = news;
        }
      }
    );
    // case when fetch news on top headings by category failed
    builder.addCase(fetchNewsByCategory.rejected, (state, action) => {
      // set topHeadingsCategoryCurrent to null because fetch request failed
      state.topHeadingsCategoryCurrent = null;

      // display warning message
      toast.warn(action.error.message, toastProperties);
    });
    builder.addCase(
      fetchNewsBySearch.fulfilled,
      (state, action: PayloadAction<NewsArticle[]>) => {
        // make a variable for news articles received
        const news = action.payload;
        if (news) {
          state.topHeadingsSearch = news;
        }
      }
    );
    // case when fetch news on top headings by category failed
    builder.addCase(fetchNewsBySearch.rejected, (state, action) => {
      // display warning message
      toast.warn(action.error.message, toastProperties);
    });
    builder.addCase(
      fetchTranslateArticle.fulfilled,
      (state, action: PayloadAction<TranslateArticleResult | null>) => {
        // make a variable for received prop
        const translatedArticle = action.payload;

        // check the news article type (category/source/search)
        // based on this type the global state variable is selected
        if (translatedArticle) {
          if (translatedArticle.topHeadingsType === "source") {
            // update news article with translated title, description and content
            state.topHeadingsSource?.map((topheading) => {
              if (topheading.title === translatedArticle.oldTitle) {
                topheading.title = translatedArticle.title;
                topheading.description = translatedArticle.description;
                topheading.content = translatedArticle.content;
              }
            });
          } else if (translatedArticle.topHeadingsType === "search") {
            state.topHeadingsSearch?.map((topheading) => {
              if (topheading.title === translatedArticle.oldTitle) {
                topheading.title = translatedArticle.title;
                topheading.description = translatedArticle.description;
                topheading.content = translatedArticle.content;
              }
            });
          }
        }
      }
    );
    // case when fetch news on top headings by category failed
    builder.addCase(fetchTranslateArticle.rejected, (state, action) => {
      // display warning message
      toast.warn(action.error.message, toastProperties);
    });
    builder.addCase(
      fetchTranslateArticleTitles.fulfilled,
      (state, action: PayloadAction<string[] | null>) => {
        // make a variable for received prop
        const translatedArticleTitles = action.payload;

        // updaye the state articles with translated titles
        if (translatedArticleTitles && translatedArticleTitles !== null) {
          state.topHeadingsSource?.map((topheading, index) => {
            topheading.title = translatedArticleTitles[index];
          });
        }
      }
    );
    builder.addCase(fetchTranslateArticleTitles.rejected, (state, action) => {
      // display warning message
      toast.warn(action.error.message, toastProperties);
    });
  },
});

export const {
  activateSearchFlag,
  deactivateSearchFlag,
  setTopHeadingsCategoryCurrent,
} = topheadingsReducer.actions;
export default topheadingsReducer.reducer;

// create async thunk method for fetching news by source
export const fetchNewsBySource = createAsyncThunk(
  "topheadlines/fetch/source",
  async (source: string) => {
    //const response = await api.getFakeHeadlines(source);
    const response = await api.getHeadlinesBySource(source);
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

// create async thunk method for fetching news by search
export const fetchNewsBySearch = createAsyncThunk(
  "topheadlines/fetch/search",
  async (query: string) => {
    //const response = await api.getFakeHeadlines(query);
    const response = await api.getHeadlinesBySearch(query);
    return response;
  }
);

// create thunk method to translate article
export const fetchTranslateArticle = createAsyncThunk(
  "topheadlines/translate/article",
  async (translateArticle: TranslateArticle) => {
    const response = await api.getTranslateArticle(translateArticle);
    return response;
  }
);

// create thunk method to translate article titles
export const fetchTranslateArticleTitles = createAsyncThunk(
  "topheadlines/translate/article/titles",
  async (articles: TranslateArticleTitles) => {
    const response = await api.getTranslateArticleTitles(articles);
    return response;
  }
);
