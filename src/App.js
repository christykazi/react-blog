import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import BlogList from "./Components/BlogList";

function App() {
  return (
     <div className="App"> 
     <Navbar/>
     {/* <BlogList/> */}
    <div className="content">
    <Home/>
   
  
    </div>
    </div>
  
  );
}

export default App;
