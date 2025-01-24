import React, { createContext, useContext, useState, ReactNode } from "react";
import { postsdata } from "../data/mockData";

interface PostContextType {
  posts: Post[];
  addPost: (newPost: Omit<Post, "id">) => void;
}


const PostContext = createContext<PostContextType | undefined>(undefined);

const mockPosts: Post[] = postsdata;

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const addPost = (newPost: Omit<Post, "id">) => {
    setPosts((prev) => [
      { id: prev.length + 1, ...newPost }, 
      ...prev,
    ]);
  };
  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
