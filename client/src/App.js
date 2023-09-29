import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Navigate } from 'react-router-dom';
import NewBook from "./components/NewBook";
import Dashboard from './components/Dashboard';
import BookInfo from './components/BookInfo';
import EditProfile from './components/EditProfile';
import LogIn from './components/LogIn';
import EditBook from './components/EditBook';
import Credits from './components/Credits';

const App = () => {
  return(
    <div className='App'>
      <Routes>
        <Route  index element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='books/newbook' element={<NewBook/>}/>
        <Route path='/books' element={<Dashboard/>} />
        <Route path='/books/:id' element={<BookInfo/>}/>
        <Route path='/books/profile' element={<EditProfile/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/credits' element={<Credits/>}/>
      </Routes>
    </div>
  )
}

export default App;
