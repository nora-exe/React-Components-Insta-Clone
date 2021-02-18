//* 🌻 Import State hook, Posts, SearchBar, and dummyData
import React, {useState} from 'react';
import Posts from './components/Posts/Posts.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

//* Import style
import './App.css';

const App = () => {
  //* 🌻 Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  //TODO : Make another state to hold search term to make search bar work
  const [posts, setPosts] = useState(dummyData);

  //* 🌻 INCREMENT function 'likePost' that takes a post with a given ID. If the post ID matches postID, returns new post object with desired values (likes + 1) using spread operator; else returns original post obj unchanged
  const likePost = postId => {
    setPosts(posts.map((post) => {
      return post.id === postId ? {...post, likes: (post.likes + 1)} : post;
    }))
  };

  //* 🌻 Render SearchBar and Posts; pass in props from Posts.js
  return (
    <div className='App'>
      <SearchBar />
      <Posts posts={posts} likePost={likePost}/>
    </div>
  );
};

export default App;
