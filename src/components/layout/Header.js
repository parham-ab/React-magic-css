import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { menuItems } from "../../constants/menuItems";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex">
      <Drawer
        sx={{
          flexShrink: 1,
          "& .MuiDrawer-paper": {
            width: 30,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ padding: "2px" }}>
          {menuItems.map((item) => (
            <div key={item.path} onClick={() => navigate(`${item.path}`)}>
              <IconButton
                className={`${
                  window.location.pathname === item.path && "active"
                }`}
                sx={{ padding: "5px" }}
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
          width: `calc(100% - ${30}px)`,
          bgcolor: "#1c2442",
          flexFlow: "inherit",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 37px",
        }}
      >
        <Link to="/donation">
          <AwesomeButton
            type="primary"
            style={{
              fontSize: "12px",
              padding: "4px",
            }}
          >
            Buy me a Coffee
          </AwesomeButton>
        </Link>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
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
