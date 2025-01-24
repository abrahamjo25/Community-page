import React, { useState } from "react";
import Comment from "./Comment";
import { debounce } from "../utils";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { postComments } from "../data/mockData";
  
const Comments = ({postId}:{postId: number | undefined}) => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<CommentData[]>(postComments?.filter((val)=>val.postId == postId));

  const addReply = (commentId: number, replyText: string) => {
    const commentsWithNewReply = [...comments];
    insertComment(commentsWithNewReply, commentId, replyText);
    setComments(commentsWithNewReply);
  };

  const newComment = (text: string): CommentData => ({
    id: new Date().getTime(),
    postId : postId,
    display: text,
    author: "New User",
    commentedDate: new Date().toDateString(),
    children: [],
  });

  const insertComment = (
    comments: CommentData[],
    parentId: number,
    text: string
  ) => {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.id === parentId) {
        comment.children.unshift(newComment(text));
      }
      insertComment(comment.children, parentId, text);
    }
  };

  const debouncedUpdateCommentInput = debounce(
    (text: string) => setCommentInput(text),
    30
  );

  return (
    <Card variant="outlined" sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Comments
        </Typography>

        {/* Comment Form */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={commentInput}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              debouncedUpdateCommentInput(event.target.value)
            }
            placeholder="Write a comment..."
          />
          <Button
            variant="contained"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => {
              setComments([newComment(commentInput), ...comments]);
              setCommentInput("");
            }}
          >
            Add Comment
          </Button>
        </Box>
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id}>
              <Comment comment={comment} addReply={addReply} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Comments;
