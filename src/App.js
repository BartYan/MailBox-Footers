import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import './Style/style.scss';
import HomePage from './Pages/HomePage';
import StandardPage from './Pages/StandardPage';
import CompanyPage from './Pages/CompanyPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* The default route */}
          <Route path="/" element={
            <HomePage />
          }/>
          <Route path="hello" element={
            <HomePage />
          }/>
          <Route path="standard" element={
            <StandardPage />
          }/>
          <Route path="company" element={
            <CompanyPage />
          }/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;