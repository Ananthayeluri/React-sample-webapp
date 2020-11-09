import React from 'react';

export const HomePage=()=>{
return(
<div className="jumbotron" id ="hone"><h1 style={{textAlign:"center"}}>Home Page</h1>
<article style={{fontFamily:"sans-serif"}}><blockquote><h4>ReactJS is an open source JavaScript library built with minimal coding by Facebook to create rich and engaging web apps quickly and efficiently. ReactJS's central goal is to provide the best possible rendering output. Its strength comes from the focus on individual pieces. ReactJS helps a developer to break down the complex UI into easier components instead of focusing on the entire web app.</h4></blockquote></article>
<h3 style={{textAlign:"center"}}>Top Videos In React</h3>
<div className="row" style={{display:"flex", flexDirection:"row", margin:"10px"}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4UZrsTqkcW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/sBws8MSXN7A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dGcsHMXbSOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ke90Tje7VS0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>

</div>
)
}