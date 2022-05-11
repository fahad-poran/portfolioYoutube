import './App.scss';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Blogs from './Pages/Blogs';
import Contract from './Pages/Contract';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import Blog from './Pages/Blog';
import Layout from './Components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route index element={<Home></Home>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
