import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = [
  {
    name: "Industry Types",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Knowledge Base",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
];

export default function Headers() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="company-logo py-4 px-2">
        <img src="./images/logo.png" className="img-fluid" alt="Company Logo" />
      </div>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <div className="py-2">
          <button className="btn btn-border-1 ">SignUp</button>
        </div>
        <div className="py-2">
          <button className="btn btn-filled-1 ">Get Free Demo</button>
        </div>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="nav-bar">
        <Toolbar className="justify-content-between">
          <div className="d-flex align-items-center">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "#498bdc", display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="company-logo">
              <img
                src="./images/logo.png"
                className="img-fluid"
                alt="Company Logo"
              />
            </div>
          </div>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item, i) => (
              <button className="btn btn-links" key={i}>
                {item?.name}
              </button>
            ))}
            <button className="btn btn-border-1 responsive-btn">SignUp</button>
            <button className="btn btn-filled-1 responsive-btn">
              Get Free Demo
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
