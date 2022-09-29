import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    let userId=5;
return(
    <div>
<ul>
    <li><Link to="/">ANASAYFA</Link></li>
    <li><Link to={{pathname :'/users/' + userId}}>KULLANICI</Link></li>
</ul>
        
    </div>
)

}

export default NavBar;