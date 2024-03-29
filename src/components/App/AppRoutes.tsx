import './App.scss';

import { Routes, Route } from 'react-router-dom';

import CatalogPage from '../pages/CatalogPage/CatalogPage';

function AppRoutes() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        {/* <Route path="/favorites" element={<NewsPage />}></Route>
        <Route path="/basket" element={<NewsPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:id" element={<NewsSinglePage />}></Route> */}
      </Routes>
    </main>
  );
}

export default AppRoutes;
