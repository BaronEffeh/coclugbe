import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import SermonPage from './pages/SermonPage';
import BlogPage from './pages/BlogPage';
import SermonEvent from './pages/SermonEvent';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='sermons' element={<SermonPage />} />
          <Route path='blog/*' element={<BlogPage />} />
          <Route path='sermons/sermon-events' element={<SermonEvent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
