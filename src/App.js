
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path ='/' element={<Home />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/project' element={<Projects />} />
        <Route path ='/skills' element={<Skills />} />
        
      </Route>
    </Routes>
  );
}

export default App;
