import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { usePostContext } from "../context/PostContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useHistory } from "react-router-dom";

export const CreatePost = () => {
  const { addPost } = usePostContext();
  const history = useHistory();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [image, setImage] = useState<string>(
    "https://via.placeholder.com/800x400"
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (title && description && tag && image) {
      addPost({
        img: image,
        tag,
        title,
        description,
        authors: [
          {
            name: "Default Author",
            avatar: "/static/images/avatar/default.jpg",
            date: new Date().toISOString(),
          },
        ],
      });

      setTitle("");
      setDescription("");
      setTag("");
      setImage("https://via.placeholder.com/800x400");
      history.push("/");
    }
  };

  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 4, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
              display: "flex",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Link to="/">
              <Button color="primary" variant="contained" size="small">
                <ArrowBackIcon />
                Home
              </Button>
            </Link>
            <Typography variant="h3" component="h1" gutterBottom>
              Create Your Post
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Share your thoughts with the world! Add an image and your text
            content below.
          </Typography>
        </Box>

        <Card sx={{ p: 2, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Upload Image
                </Typography>
                <Button variant="contained" component="label">
                  Upload Image
                  <input type="file" hidden onChange={handleImageUpload} />
                </Button>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Title
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your  title here"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Content
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your  content here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  variant="outlined"
                />
              </Box>

              {/* Tag */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Tag
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Add a tag (e.g., Photography, Culture)"
                  variant="outlined"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={handleSubmit}
                  disabled={!title || !description || !tag || !image}
                >
                  Publish Blog
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Post Preview
          </Typography>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={image}
              alt="Post Image"
              sx={{ height: 400 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {title || "Post Title Goes Here"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description ||
                  "This is where the post content will be previewed."}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                color="text.secondary"
                mt={2}
              >
                Tag: {tag || "No tag added yet"}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePost;
