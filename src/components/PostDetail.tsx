import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { Provider } from "./Provider";
import Comment from "./Comments";
import { usePostContext } from "../context/PostContext";
import { Link } from "@mui/material";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function Author({
  authors,
}: {
  authors?: { name: string; avatar: string; date: string }[];
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          {authors?.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors?.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
      <Typography variant="caption">
        {authors?.map((author) => author.date).join(", ")}
      </Typography>
    </Box>
  );
}

export const PostDetail = () => {
  const { id } = useParams<MatchParams>();
  const { posts } = usePostContext();
  const postId = Number(id);

  const mainContent = posts.find((post) => post.id === postId);
  console.log(id);
  console.log(mainContent);

  const relatedPosts = posts.filter((post) => post.id !== postId);

  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Provider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Grid container spacing={2} columns={12}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 9 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? "Mui-focused" : ""}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
              }}
            >
              <CardMedia
                component="img"
                alt="Main Post"
                image={mainContent?.img}
                sx={{
                  aspectRatio: "16 / 9",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent sx={{ paddingBottom: "16px" }}>
                <Typography gutterBottom variant="caption" component="div">
                  {mainContent?.tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {mainContent?.title}
                </Typography>
                {mainContent?.description && (
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {mainContent?.description}
                  </StyledTypography>
                )}
              </SyledCardContent>
              <Author authors={mainContent?.authors} />
            </SyledCard>
            <Comment postId={mainContent?.id} />
          </Grid>

          {/* Related Posts */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ padding: "6px" }}>
              Related Posts
            </Typography>
            {relatedPosts.map((post, index) => (
              <Link key={post.id} href={`/posts/${post.id}`} underline="none">
                <SyledCard
                  variant="outlined"
                  onFocus={() => handleFocus(index + 1)}
                  onBlur={handleBlur}
                  tabIndex={0}
                  sx={{ height: "400px" }}
                  className={
                    focusedCardIndex === index + 1 ? "Mui-focused" : ""
                  }
                >
                  <CardMedia
                    component="img"
                    alt={post.title}
                    image={post.img}
                    sx={{
                      aspectRatio: "16 / 9",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                  <SyledCardContent>
                    <Typography gutterBottom variant="caption" component="div">
                      {post.tag}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.title}
                    </Typography>
                    {/* No description for related posts */}
                  </SyledCardContent>
                  <Author authors={post.authors} />
                </SyledCard>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Provider>
  );
};
