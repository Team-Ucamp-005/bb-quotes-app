import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './Home';
import Movies from './components/Movies/Movies';
import Detail from './components/Detail/Detail';
import NavBar from './components/Layouts/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          {/* <Layout /> */}
          <Route path="/" element={<NavBar />} >
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/:movieId" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);

