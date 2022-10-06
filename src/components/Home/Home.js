import React,{useState, useEffect} from"react";
import "./Home.css"
import Film from "../Film/Film";

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
        
           {filmList.map(film =>(

         <Film title={film.title} text={film.text} film_Pic={film.film_Pic} id={film.id}></Film> 
           /* <Film title={film.title} text={film.text} film_Pic={URL.createObjectURL(film.film_Pic)} id={film.id}></Film>  */
           
         ))}
       </div>
       );
   }    

}
export default Home;