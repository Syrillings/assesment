import './App.css';
import Subtraction from './components/Subtraction';
import Second from './components/second';
import Image from "./components/image";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Featured from "./components/featuredproject";

const feature = [
  { desc: "Lorem ipsum dolor sit amet." },
  { desc: "Lorem ipsum dolor sit amet." },
  { desc: "sit amet consectetur adipisicing elit" },
];

function App() {
  return (
    <div className="App">
      <nav>
      <Subtraction />
      </nav>
     <div className='red'>
      <Second />
      </div>
      
     
      <div className="flex justify-center feature-container">
      {Array.from({ length: 3 }).map((imag, i) => (
              <Featured key={i} num={i + 1} />
            ))}
        </div>
        <div className="main-container">
          <Main/>
          <Sidebar/>
                  </div>
      <div className="gallery container">
          <h3>Gallery</h3>
          <div className="image-container">
            {Array.from({ length: 6 }).map((image, i) => (
              <Image key={i} num={i + 1} />
            ))}
          </div>
        </div>
       </div>
     
  );
}

export default App;