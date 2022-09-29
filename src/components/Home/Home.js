import React,{useState, useEffect} from"react";
import Film from "../Film/Film";
import Users from "../User/Users";
function Home(){
  const [error, setError]= useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [filmList, setFilmList]= useState([]);

    useEffect(() => {
        fetch("/films")
        .then(res => res.json())
        .then(
                (result) =>{
                    setIsLoaded(true);
                     setFilmList(result)
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
        return( 
          <div className="container">
         <Film></Film>
         <Users></Users>
       
            {filmList.map(film =>(
            <Film title={film.title} text={film.text}></Film>
            
          ))}
        </div>
        );
    }    
 

}
export default Home;