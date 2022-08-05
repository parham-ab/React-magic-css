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
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import GradientIcon from "@mui/icons-material/Gradient";
import { IconButton } from "@mui/material";

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
      text: "gh",
      icon: <AutoFixNormalIcon color="text.secondary" />,
      path: "/",
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
        <List>
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
          ml: `${100}px`,
          bgcolor: "#927aff",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Magic CSS
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
