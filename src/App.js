import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter, Route, Routes} from 'react-router-dom';//for router-com v6
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWSBAAP_APIKEY;
  const [progess,setProgress] = useState(0);

    //https://newsapi.org for getting new api.
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progess}
          />
          <Routes>
            {/* agar same component use kr rhe saare routes pe to bina key lagaye reload nhi hoga. */}
            <Route exact path="/" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="general" pageSize={pageSize} country='in' category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="business" pageSize={pageSize} country='in' category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="health" pageSize={pageSize} country='in' category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="science" pageSize={pageSize} country='in' category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="sports" pageSize={pageSize} country='in' category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKeyStr={apiKey} key="technology" pageSize={pageSize} country='in' category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;