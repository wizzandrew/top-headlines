import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Tech from "./pages/Tech";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import SearchPage from "./pages/SearchPage";
import America from "./components/TabAmericaComponent";
import Europe from "./components/TabEuropeComponent";
import Africa from "./components/TabAfricaComponent";
import Asia from "./components/TabAsiaComponent";
import NewsArticleSourceComponent from "./components/NewsArticleSourceComponent";
import NewsArticleHomeComponent from "./components/NewsArticleHomeComponent";
import NewsArticleCategoryComponent from "./components/NewsArticleCategoryComponent";
import NewsArticleSearchComponent from "./components/NewsArticleSearchComponent";
import { useAppSelector } from "./redux/hooks";
import "./App.css";

function App() {
  // global state
  const topheadingsSource = useAppSelector(
    (state) => state.topHeadings.topHeadingsSource
  );
  const topheadingsCategory = useAppSelector(
    (state) => state.topHeadings.topHeadingsCategory
  );
  const topheadingsSearch = useAppSelector(
    (state) => state.topHeadings.topHeadingsSearch
  );

  // search page
  const Search = () => {
    let params = useParams();
    return <SearchPage query={params.query} />;
  };

  // unique news article home component with its own route path
  // news article home - component for article for specific news agent
  const NewsArticleHomeWithId = () => {
    let params = useParams();
    return (
      <NewsArticleHomeComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
      />
    );
  };

  // unique news article source component with its own route path
  // news article source - component for article for specific news agent
  const NewsArticleSourceWithId = () => {
    let params = useParams();
    return (
      <NewsArticleSourceComponent
        article={topheadingsSource?.filter((a) => a.title === params.title)[0]}
      />
    );
  };

  // unique news article world component with its own route path
  // news article world - component for article for world news
  const NewsArticleWorldCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="WORLD"
      />
    );
  };

  // unique news article business component with its own route path
  // news article business - component for article for business news
  const NewsArticleBusinessCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="BUSINESS"
      />
    );
  };

  // unique news article entertainment component with its own route path
  // news article entertainment - component for article for entertainment news
  const NewsArticleEntertainmentCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="ENTERTAINMENT"
      />
    );
  };

  // unique news article health component with its own route path
  // news article health - component for article for health news
  const NewsArticleHealthCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="HEALTH"
      />
    );
  };

  // unique news article tech component with its own route path
  // news article tech - component for article for tech news
  const NewsArticleTechCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="TECHNOLOGY"
      />
    );
  };

  // unique news article sports component with its own route path
  // news article sports - component for article for sports news
  const NewsArticleSportsCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="SPORTS"
      />
    );
  };

  // unique news article science component with its own route path
  // news article science - component for article for science news
  const NewsArticleScienceCategoryWithId = () => {
    let params = useParams();
    return (
      <NewsArticleCategoryComponent
        article={
          topheadingsCategory?.filter((a) => a.title === params.title)[0]
        }
        bannerText="SCIENCE"
      />
    );
  };

  // unique news article search component with its own route path
  // news article search - component for article for searched news
  const NewsArticleSearchWithId = () => {
    let params = useParams();
    return (
      <NewsArticleSearchComponent
        article={topheadingsSearch?.filter((a) => a.title === params.title)[0]}
        bannerText="SEARCH"
      />
    );
  };

  const Router = () => {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home/:title" element={<NewsArticleHomeWithId />} />
        <Route path="/home/america" element={<America />} />
        <Route path="/home/europe" element={<Europe />} />
        <Route path="/home/africa" element={<Africa />} />
        <Route path="/home/asia" element={<Asia />} />
        <Route
          path="/home/source/:title"
          element={<NewsArticleSourceWithId />}
        />
        <Route path="/world" element={<World />} />
        <Route
          path="/world/:title"
          element={<NewsArticleWorldCategoryWithId />}
        />
        <Route path="/business" element={<Business />} />
        <Route
          path="/business/:title"
          element={<NewsArticleBusinessCategoryWithId />}
        />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route
          path="/entertainment/:title"
          element={<NewsArticleEntertainmentCategoryWithId />}
        />
        <Route path="/health" element={<Health />} />
        <Route
          path="/health/:title"
          element={<NewsArticleHealthCategoryWithId />}
        />
        <Route path="/tech" element={<Tech />} />
        <Route
          path="/tech/:title"
          element={<NewsArticleTechCategoryWithId />}
        />
        <Route path="/sports" element={<Sports />} />
        <Route
          path="/sports/:title"
          element={<NewsArticleSportsCategoryWithId />}
        />
        <Route path="/science" element={<Science />} />
        <Route
          path="/science/:title"
          element={<NewsArticleScienceCategoryWithId />}
        />
        <Route path="/search/query/:query" element={<Search />} />
        <Route path="/search/:title" element={<NewsArticleSearchWithId />} />
      </Routes>
    );
  };

  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
