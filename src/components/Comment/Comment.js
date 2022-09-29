import React,{useState, useEffect} from"react";


function Comment() {
    const [error, setError]= useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [commentList, setCommentList]= useState([]);

    useEffect(() => {
        fetch("/comments")
        .then(res => res.json())
        .then(
                (result) =>{
                    setIsLoaded(true);
                     setCommentList(result)
                    },
            
                (error) =>{
                    console.log(error);
                    setIsLoaded(true); 
                    setError(error);
                }
        )
    }, [])

    if(error){
        return <div> Error!! </div>
    }
    else if(!isLoaded){
        return <div>Bekleyiniz </div> 
    }
    else{
        return <ul>
            {commentList.map(comment =>(
            <li>
                {comment.title} {comment.text} 
            </li>
        ))}</ul>
    }    
    }
    export default Comment;