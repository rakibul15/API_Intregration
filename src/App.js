import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const[posts,setPosts] = useState({});
    useEffect(()=> {
      fetch("https://xkcd.com/info.0.json", {
        mode: 'no-cors',
  method: 'get',
  headers: {  
    "Content-Type": "application/json",
    "Accept":"*/*",
    
  },
})   
            .then(res => res.json())
            .then(data=> setPosts(data))
    }, []);
  
    const {month, num, link, year,news,safe_title,transcript,alt,img,title,day } = posts;
  return (
    <div>
     
    </div>
  );
}

export default App;

