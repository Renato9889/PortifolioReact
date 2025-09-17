// App.js - Atualização do cursor
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [load, updateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    // Adicionar classe hover para elementos interativos
    const linkElements = document.querySelectorAll('a, button, .social-btn, .nav-link');
    linkElements.forEach(el => {
      el.addEventListener('mouseenter', () => setCursorVariant("hover"));
      el.addEventListener('mouseleave', () => setCursorVariant("default"));
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      linkElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setCursorVariant("hover"));
        el.removeEventListener('mouseleave', () => setCursorVariant("default"));
      });
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className={`cursor ${cursorVariant === "hover" ? "hover" : ""}`}
        variants={variants}
        animate={cursorVariant}
      />
      <Router basename={process.env.PUBLIC_URL}>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;