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
import NewsArticleComponent from "./components/NewsArticleComponent";
import { useAppSelector } from "./redux/hooks";
import "./App.css";

function App() {
  // global state
  const topheadings = useAppSelector((state) => state.topHeadings.topHeadings);

  // uniqie news article component with its own route path
  const NewsArticleWithId = () => {
    let params = useParams();
    return (
      <NewsArticleComponent
        article={topheadings?.filter((a) => a.title === params.title)[0]}
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
        <Route path="/home/:title" element={<NewsArticleWithId />} />
        <Route path="/world" element={<World />} />
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
