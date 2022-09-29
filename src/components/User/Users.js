import React,{useState, useEffect} from"react";


function Users() {
    const [error, setError]= useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [usersList, setUsersList]= useState([]);

    useEffect(() => {
        fetch("/comments")
        .then(res => res.json())
        .then(
                (result) =>{
                    setIsLoaded(true);
                     setUsersList(result)
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
            {usersList.map(users =>(
            <li>
                {users.title} {users.text} 
            </li>
        ))}</ul>
    }    
    }
    export default Users;