
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


const  App  =()=> {
 const pageSize = 9;
  const apikey='b023f1bbe97249558225b1d33ed6e4d3'
  
 const [progress, setProgress] = useState(0);
  
    return (
     
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <div className="my-3">

            <Routes>
              <Route path="/" element={<News setProgress={setProgress}  apikey={apikey}   country="in" pageSize={pageSize} category="general" />}></Route>
              <Route path="/business" element={<News setProgress={setProgress}  apikey={apikey}   key='business' country="in" pageSize={pageSize} category="business" />} />
              <Route path="/entertainment" element={<News setProgress={setProgress}  apikey={apikey}   key='entertainment' country="in" pageSize={pageSize} category="entertainment" />} />
              <Route path="/general" element={<News setProgress={setProgress}  apikey={apikey}   key='general' country="in" pageSize={pageSize} category="general" />} />

              <Route path="/health" element={<News setProgress={setProgress}  apikey={apikey}   key='health' country="in" pageSize={pageSize} category="health" />} />
              <Route path="/science" element={<News setProgress={setProgress}  apikey={apikey}   key='science' country="in" pageSize={pageSize} category="science" />} />
              <Route path="/sports" element={<News setProgress={setProgress}  apikey={apikey}   key='sportts' country="in" pageSize={pageSize} category="sports" />} />
              <Route path="/technology" element={<News setProgress={setProgress}  apikey={apikey}   key='technology' country="in" pageSize={pageSize} category="technology" />} />


            </Routes>
          </div>

        </Router>


      </div>
    )
  }


export default App;



