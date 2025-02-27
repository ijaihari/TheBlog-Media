import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import Intro from './components/Intro';
import Blogs from './components/Blogs';
import Write from './components/Write';
import SingleBlog from './components/SingleBlog';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<SingleBlog/>} />
        <Route path='/write' element={<Write/>} />
      </Routes>

    </div>
  );
}

export default App;