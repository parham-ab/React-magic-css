// react router dom
import { useNavigate } from "react-router-dom";
// mui components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
// icons
import GradientIcon from "@mui/icons-material/Gradient";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Shadow Generator",
      icon: <AutoFixNormalIcon color="text.secondary" />,
      path: "/shadowGenerator",
    },
    {
      text: "gradient",
      icon: <GradientIcon color="text.secondary" />,
      path: "/gradient",
    },
    {
      text: "TextShadowGenerator",
      icon: <FormatColorTextIcon color="text.secondary" />,
      path: "/TextShadowGenerator",
    },
  ];

  return (
    <Box display="flex">
      <Drawer
        sx={{
          // width: 100,
          flexShrink: 1,
          "& .MuiDrawer-paper": {
            width: 45,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ padding: "3px" }}>
          {menuItems.map((item) => (
            <div key={item.path} onClick={() => navigate(`${item.path}`)}>
              <IconButton
                className={`${
                  window.location.pathname === item.path && "active"
                }`}
              >
                {item.icon}
              </IconButton>
            </div>
          ))}
        </List>
      </Drawer>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${45}px)`,
          bgcolor: "#927aff",
          flexFlow: "inherit",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 37px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Magic CSS
          </Typography>
        </Toolbar>

        <a
          href="https://github.com/parham-ab/React-magic-css"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconButton size="large" edge="end" color="inherit">
            <GitHubIcon />
          </IconButton>
        </a>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
