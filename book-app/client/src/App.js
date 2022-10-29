// import Home from './components/Home';
import Books from './components/Books';
import Register from './components/Register';
import Login from './components/Login';
import Book from './components/Book';
import HomePage from './pages/HomePage';
// import SearchPage from './components/Books';
import NavBar from './routes-nav/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/books' element={<Books/>} />
          <Route path='/books/:bookid' element={<Book/>}/>
          {/* <Route path='/nav' element= { <NavBar/> }/>
          <Route path='/search' element=  { <SearchPage/> }/> */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
    </Routes>
    </BrowserRouter>
  )
}
export default App;
