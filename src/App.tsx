import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import PageRoutes from "./routes";
import { PostProvider } from "./context/PostContext";
export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <PostProvider>
        <CssBaseline enableColorScheme />
        <PageRoutes />
      </PostProvider>
    </AppTheme>
  );
}
