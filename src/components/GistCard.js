import React, { useState, useEffect } from "react";
import axios from "axios";
import GistInspect from "./GistInspect";
export const GistCard = (props) => {
  const gists = Object.values(props);
  const files = Object.values(gists[1]);
  const [forks, setForks] = useState([]);
  const [gist,setGist] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/gists/${gists[0]}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setForks(res.data.forks);
        setGist(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [gists[0]]);

 
  return (
    <div className="gist-card">
      <span className="id">{"ID: "+gists[0]}</span>
      <span>Files</span>
      <div className="files">
        {files.map((file, index) => (
          <span key={index}>{file.filename + " "}</span>
        ))}
      </div>
      <span>Tags</span>
      <div className="tags">
        {files.map((file, index) => (
          <span key={index}>{file.language ? file.language + " " : ""}</span>
        ))}
      </div>
      <span>Forks</span>
      <div className="forks">
        {forks.slice(0,3).map((fork, index) => {
          return (
            <div className="user">
          <span className="user-login" key={index}>{fork ? fork.user.login + " " : ""}</span>
          <img className="image" key={index} src={fork? fork.user.avatar_url:""}></img>
          </div>
        )})}
      </div> 
          
    </div>
  );
};
