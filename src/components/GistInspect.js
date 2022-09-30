import Frame from 'react-frame-component';
const GistInspect = ({clickedGist,setClickedGist}) =>{
    const handleClick=(e)=>{
        if(e.target.classList.contains("dismiss")){
            setClickedGist(null);
            console.log("click in if");
        }
        console.log("click in afara if");
    }
    return(
        <div className="inspect dismiss" onClick={(e)=>handleClick(e)}>
            <Frame className="gist" initialContent={"<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/"+clickedGist.owner.login+"/"+clickedGist.id+".js'></script></body></html>"}/>
        </div>
    )
};


export default GistInspect;