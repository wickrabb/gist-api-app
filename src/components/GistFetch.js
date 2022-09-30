import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GistFetch(){
    const [gists,setGists] = useState([]);
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
    return(
        <div>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <ul>
                {gists.map(gist => (<li key={gist.id}>{gist.id}</li>))}
            </ul>
        </div>
    )
}

export default GistFetch