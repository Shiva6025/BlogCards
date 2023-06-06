import React from "react";

import { dumpLogs } from "./Utils";

//import './BlogCard.css';
import classes from './blogcard.module.css';

const  BlogCard = (props) => {
 
  // onLikeBtnClick=()=>{
  //   this.setState((prevState, prevProp)=>{
  //     return {LikeCount:prevState.LikeCount+1}
  //   });
  // }
  
    dumpLogs(props);
    
    return(
        <div className={classes.BlogCard}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>

          <p>Like Count:<span className={classes.LikeCount}>{props.LikeCount}</span></p>
          <button onClick={props.onLickBtnClick}>Like</button>
        </div>
      )
}
export default BlogCard;