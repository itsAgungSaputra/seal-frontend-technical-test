import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailBerita from './pages/DetailBerita';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailberita" element={<DetailBerita />} />
        <Route path="/terbaru" element={<h1 className='font-bold text-6xl my-20 container mx-auto'>Terbaru</h1>} />
        <Route path="/hiburan" element={<h1 className='font-bold text-6xl my-20 container mx-auto'>Hiburan</h1>} />
        <Route path="/olahraga" element={<h1 className='font-bold text-6xl my-20 container mx-auto'>Olahraga</h1>} />
        <Route path="/nasional" element={<h1 className='font-bold text-6xl my-20 container mx-auto'>Nasional</h1>} />
        <Route path="/internasional" element={<h1 className='font-bold text-6xl my-20 container mx-auto'>Internasional</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
