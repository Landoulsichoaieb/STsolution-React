import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Profile from './Page/Profile';
import EditProfile from './Page/EditProfile';
import EditPassword from './Page/EditPassword';
import EditDescription from './Page/EditDescription';
import EditImage from './Page/EditImage';
import EditCv from './Page/EditCv';
import CompanyForm from './Page/CompanyForm';
import Index from './Page/index';
import ProfileFor from './Page/ProfileFor';
import EditTags from './Page/EditTags';
import EditField from './Page/EditField';
import EditProgA from './Page/EditProgA';
import EditProgB from './Page/EditProgB';
import EditFrameA from './Page/EditFrameA';
import EditFrameB from './Page/EditFrameB';
import Search from './Page/Search';
import EditPhone from './Page/EditPhone';
import About from './Page/About';
import Contact from './Page/Contact';
import AddPost from './Page/AddPost';
import Post from './Page/Post';
import PostManage from './Page/PostManage';
import Analysis from './Page/Analysis';
import ListInterrested from './Page/ListInterrested';
import ProfileComp from './Page/ProfileComp';
import Profileforcomp from './Page/Profileforcomp';
import ProjectTimeline from './Page/ProjectTimeline';
import Popper from 'popper.js';
import $ from 'jquery';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        <Route path='/EditPassword' element={<EditPassword/>}/>
        <Route path='/EditDescription' element={<EditDescription/>}/>
        <Route path='/EditImage' element={<EditImage/>}/>
        <Route path='/EditCv' element={<EditCv/>}/>
        <Route path='/CompanyForm' element={<CompanyForm/>}/>
        <Route path='/ProfileFor' element={<ProfileFor/>}/>
        <Route path='/EditTags' element={<EditTags/>}/>
        <Route path='/EditField' element={<EditField/>}/>
        <Route path='/EditProgA' element={<EditProgA/>}/>
        <Route path='/EditProgB' element={<EditProgB/>}/>
        <Route path='/EditFrameA' element={<EditFrameA/>}/>
        <Route path='/EditFrameB' element={<EditFrameB/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/EditPhone' element={<EditPhone/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/AddPost' element={<AddPost/>}/>
        <Route path='/Post' element={<Post/>}/>
        <Route path='/PostManage' element={<PostManage/>}/>
        <Route path='/Analysis' element={<Analysis/>}/>
        <Route path='/ListInterrested' element={<ListInterrested/>}/>
        <Route path='/ProfileComp' element={<ProfileComp/>}/>
        <Route path='/Profileforcomp' element={<Profileforcomp/>}/>
        <Route path='/ProjectTimeline' element={<ProjectTimeline/>}/>
        <Route path='/' element={<Index/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
