// react router dom
import { useNavigate } from "react-router-dom";
// react router dom
import { Link } from "react-router-dom";
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
import VignetteIcon from "@mui/icons-material/Vignette";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import { BsMarkdownFill } from "react-icons/bs";
// react awesome button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Header = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Shadow Generator",
      icon: (
        <AutoFixNormalIcon color="text.secondary" sx={{ fontSize: "16px" }} />
      ),
      path: "/shadowGenerator",
    },
    {
      text: "gradient",
      icon: <GradientIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
      path: "/gradient",
    },
    {
      text: "TextShadowGenerator",
      icon: (
        <FormatColorTextIcon color="text.secondary" sx={{ fontSize: "16px" }} />
      ),
      path: "/TextShadowGenerator",
    },
    {
      text: "BorderRadius",
      icon: <VignetteIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
      path: "/border-radius",
    },
    {
      text: "skew",
      icon: (
        <AspectRatioIcon color="text.secondary" sx={{ fontSize: "16px" }} />
      ),
      path: "/skew",
    },
    {
      text: "textGenerator",
      icon: <ColorLensIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
      path: "/color-picker",
    },
    {
      text: "textEditor",
      icon: <FormatSizeIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
      path: "/text-editor",
    },
    {
      text: "colorGenerator",
      icon: (
        <FormatPaintIcon color="text.secondary" sx={{ fontSize: "16px" }} />
      ),
      path: "/color-generator",
    },
    {
      text: "markdownGenerator",
      icon: (
        <BsMarkdownFill color="text.secondary" style={{ fontSize: "16px" }} />
      ),
      path: "/markdown",
    },
    {
      text: "ImageFilter",
      icon: <ImageIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
      path: "/image-filter",
    },
  ];

  return (
    <Box display="flex">
      <Drawer
        sx={{
          // width: 100,
          flexShrink: 1,
          "& .MuiDrawer-paper": {
            width: 36,
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
          width: `calc(100% - ${36}px)`,
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
