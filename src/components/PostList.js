import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map(post => (
        <ListItem key={post.id} alignItems="flex-start">
          <ListItemText
            primary={post.title}
            secondary={post.body}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
