/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/


import React, {useState} from 'react';


import Posts from './components/Posts/Posts.js';
import SearchBar from './components/SearchBar/SearchBar.js'

import dummyData from './dummy-data.js'
import './App.css';

const App = () => {
  console.log('dummyData', dummyData)


  const [posts, setPosts] = useState(dummyData)


  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
      const newPosts = posts.map(post => {
        if (post.id === postId) {
          post.likes += 1
        }
        return posts
      })

      setPosts(newPosts);              
     
  };

  return (
    <div className='App'>     
      <SearchBar />  
      <Posts likePost = {likePost} posts = {posts} />   
    </div>
  );
};

export default App;

/*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.


     */