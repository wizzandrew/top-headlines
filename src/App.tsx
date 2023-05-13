import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Tech from "./pages/Tech";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import America from "./components/TabAmericaComponent";
import Europe from "./components/TabEuropeComponent";
import Africa from "./components/TabAfricaComponent";
import Asia from "./components/TabAsiaComponent";
import NewsArticleSourceComponent from "./components/NewsArticleSourceComponent";
import NewsArticleCategoryComponent from "./components/NewsArticleCategoryComponent";
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
  const NewsArticleCategoryWithId = () => {
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

  const Router = () => {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home/america" element={<America />} />
        <Route path="/home/europe" element={<Europe />} />
        <Route path="/home/africa" element={<Africa />} />
        <Route path="/home/asia" element={<Asia />} />
        <Route path="/home/:title" element={<NewsArticleSourceWithId />} />
        <Route path="/world" element={<World />} />
        <Route path="/world/:title" element={<NewsArticleCategoryWithId />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    );
  };

  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
