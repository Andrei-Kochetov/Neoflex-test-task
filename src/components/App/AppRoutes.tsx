import './App.scss';

import { Routes, Route } from 'react-router-dom';

import CatalogPage from '../pages/CatalogPage/CatalogPage';
import BasketPage from '../pages/BasketPage/BasketPage';

function AppRoutes() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/basket" element={<BasketPage />} />
        {/* <Route path="/favorites" element={<NewsPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:id" element={<NewsSinglePage />}></Route> */}
      </Routes>
    </main>
  );
}

export default AppRoutes;
