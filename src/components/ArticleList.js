import React from 'react';
import Articles from './Articles';


export default class ArticleList extends React.Component{
    render(){
        const Article =(props)=> {
            const{title,author,content,link}= props.article;
            return(
            <>
            <div className="articlelist">
            <h1>{title}</h1>
            <h6>{author}</h6>
            <p>{content}</p>
            <a href={link}>Read more</a>
            </div>
            </>
        )
        };
        
        return(
            <React.Fragment>
            
    <section id= "article">
    <h1 style={{textAlign:"center"}}>Top React Articles</h1>
    {Articles.map((article)=>{
    return  <ul>
    <li style={{listStyleType:"none"}} key ={article.id} ><Article article = {article} /></li>
    </ul>   
    })}
    </section>
    </React.Fragment>
)}

}   