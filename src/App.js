
import './App.css';
import About from './components/about';
import Builderbook from './components/builderbook';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Profile from './components/profile';
import Roles from './components/roles';
import Skill from './components/skill';
import Workexp from './components/workexp';


function App() {
  return (
    <div className="App">
     <Header/>
     <Profile/>
     <About/>
     <Workexp/>
     <Skill/>
     <Builderbook/>
     <Roles/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
