import React, { useState, useRef } from "react";
import { Button, TextField, Typography, Box, Avatar } from "@mui/material";


const Comment: React.FC<{
  comment: CommentData;
  addReply: (commentId: number, replyText: string) => void;
}> = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleReplyClick = () => {
    setShowReplyBox(true);
    setTimeout(() => inputEl.current?.focus());
  };

  const handleReplySave = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
    }
    setShowReplyBox(false);
    setReplyText("");
  };

  const handleReplyCancel = () => {
    setShowReplyBox(false);
    setReplyText("");
  };

  return (
    <Box key={comment.id} sx={{ ml: 0, borderLeft: "1px solid #ccc", pl: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Avatar alt="Abraham Yohannes" src="" sx={{ width: 24, height: 24 }} />
        <Typography variant="body1" fontWeight="bold">
          {comment.author}
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ padding: "6px" }}
      >
        {comment.display}
      </Typography>

      <Typography variant="caption" color="text.secondary">
        {new Date(comment.commentedDate).toDateString()}
      </Typography>
      {!showReplyBox && (
        <Button size="small" onClick={handleReplyClick}>
          Reply
        </Button>
      )}

      {showReplyBox && (
        <Box sx={{ marginTop: 1 }}>
          <TextField
            inputRef={inputEl}
            variant="outlined"
            size="small"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Your reply"
          />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              onClick={handleReplySave}
              sx={{ marginRight: 1 }}
            >
              Save
            </Button>
            <Button size="small" onClick={handleReplyCancel}>
              Cancel
            </Button>
          </Box>
        </Box>
      )}

      {comment.children.length > 0 && (
        <Box sx={{ marginLeft: 3 }}>
          <ul>
            {comment.children.map((childComment) => (
              <Comment
                key={childComment.id}
                comment={childComment}
                addReply={addReply}
              />
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Comment;
