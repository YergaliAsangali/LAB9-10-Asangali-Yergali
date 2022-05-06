import './App.css';
import Header from "./components/Header";
import Navb_parent from "./components/Navb_parent";
import Content from "./components/Content";
import Footer from "./components/Footer";




const App=()=> {
  return (
      // eslint-disable-next-line react/react-in-jsx-scope
   <div className='app-wrapper'>

       {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <Header />
       {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <Navb_parent />
       {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <Content />
       {/* eslint-disable-next-line react/react-in-jsx-scope */}
       <Footer />
   </div>
  );
}

export default App;
