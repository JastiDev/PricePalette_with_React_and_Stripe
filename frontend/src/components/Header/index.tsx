import { AppBar, Button, Toolbar, Typography, Box, Link } from "@mui/material";
import React from "react";
import theme from "../../theme";

export default function Header() {
  return (
    <AppBar position="static" sx={theme.appBarGradient}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <Box
            component="img"
            sx={{
              height: 40,
              width: "auto",
              /*borderRadius: "50%",*/
            }}
            alt="Price Palette"
            src="/logo-png.png"
          />
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {/* TODO: Show the below  button on ly if the user is not authenticated */}
        <Button
          color="inherit"
          style={{
            borderRadius: 20,
            marginRight: 12,
            backgroundColor: "#1192DD",
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          style={{
            borderRadius: 20,
            marginRight: 4,
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
