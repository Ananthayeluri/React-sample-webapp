import {Link} from 'react-router-dom';



const NavBar = ()=>{
return(<nav className="nave">
<ul>
<li><Link to ="/">Home</Link></li>
<li><Link to ="/articles">Articles</Link></li>
<li><Link to ="/login">Login</Link></li>
</ul>

</nav>
)
}
export default NavBar;