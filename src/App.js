import React from 'react';
import './App.css';
import BlogCard from './blogcard';
import { isArry } from './Utils';
import { Component } from 'react';

class App extends Component {
  state={
    showBlog:true,
    blogArr : [
      {
        title: 'Blog Title 1',
        id:1,
        description:'Its just a description to try my first react app',
        likeCount:0,
      },
      {
        title: 'Blog Title 2',
        id:2,
        description:'Its just a description to try my first react app',
        likeCount:0,
      },
      {
        title: 'Blog Title 3',
        id:3,
        description:'Its just a description to try my first react app',
        likeCount:0,
      }
    ]
  }

onLickBtnClick=(pos)=>{
  const updatedBlogList=this.state.blogArr;
  const updatedBlogObj=updatedBlogList[pos];
  updatedBlogObj.likeCount=updatedBlogObj.likeCount+1;

  updatedBlogList[pos]=updatedBlogObj;
  this.setState({blogArr:updatedBlogList});
}

  blogCards=isArry(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos)=>{
    
    return(
      <div className='Blogcard'>
        <BlogCard key={item.id} title={item.title} description={item.description}
         LikeCount={item.likeCount} onLickBtnClick={()=>this.onLickBtnClick(pos)}/>
      </div>
    )
  })
  
  
  onHideList=()=>{
  this.state.showBlog ? this.setState({showBlog:false}) : this.setState({showBlog:true});

    console.log(this.state.showBlog)
  }

  render(){
    const blogCards=isArry(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos)=>{

      
      return(
        <div className='Blogcard'>
          <BlogCard key={item.id} title={item.title} description={item.description}
           LikeCount={item.likeCount} onLickBtnClick={()=>this.onLickBtnClick(pos)}/>
        </div>
      )
    })
  return (
    <div className="App">
      <button onClick={this.onHideList}>{this.state.showBlog ? 'Hide List':'Show List'}</button>
      <br></br>
      {this.state.showBlog ? blogCards : null} 
    </div>
  )}
}

export default App;