import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { GistCard } from './GistCard';
import GistInspect from './GistInspect';


export const GistFetch = () => {
    const [gists,setGists] = useState([]);
    const [input,setInput] = useState("acbharat");
    const [username,setUsername] = useState("");

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/gists`, {
  headers: {
    'Authorization': `token ${process.env.REACT_APP_TOKEN}`
  }
})
.then((res) => {
  console.log(res.data)
  setGists(res.data)
})
.catch((error) => {
  console.error(error)
})
    },[username])
  
  const handleClick = () => {
    setUsername(input);
  } 

  const [clickedGist, setClickedGist] = useState(null);
  const inspectGist = (gist) => {
    setClickedGist(gist);
    console.log("click");
  };

  console.log(clickedGist);

 
  return(
      <div className="container">
        <div className="search">
          <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button type="button" onClick={handleClick}>Search Gists</button>      
        </div>   
    
          <div className="grid-container">
          {gists.map(gist => {
            return (
              <div key={gist.id} onClick={() => inspectGist(gist)}>
                <GistCard id={gist.id} props={gist.files} forks={gist.forks}/>
              </div>
            )
          })}        
        </div>
        <div>
        {clickedGist && <GistInspect clickedGist={clickedGist} setClickedGist={setClickedGist}/>}
        </div>
        </div>
    )
}
