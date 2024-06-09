import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import Header from './components/Header';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostList posts={filteredPosts} />
    </Container>
  );
};

export default App;
