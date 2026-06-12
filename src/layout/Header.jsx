import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { menuItems } from "../constants/menuItems";

const DRAWER_WIDTH = 30;

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            background: "rgba(15,15,20,0.92)",
            backdropFilter: "blur(16px)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 1,
            overflowX: "hidden",
          },
        }}
      >
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            width: "100%",
            px: 0.75,
          }}
        >
          {menuItems?.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Tooltip
                key={item.path}
                title={item.label ?? ""}
                placement="right"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "rgba(20,20,28,0.97)",
                      color: "#fff",
                      fontSize: "0.68rem",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    },
                  },
                  arrow: { sx: { color: "rgba(20,20,28,0.97)" } },
                }}
              >
                <IconButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "7px",
                    color: isActive ? "#ffc864" : "rgba(255,255,255,0.35)",
                    background: isActive
                      ? "rgba(255,200,100,0.12)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255,200,100,0.25)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: isActive
                        ? "rgba(255,200,100,0.16)"
                        : "rgba(255,255,255,0.06)",
                      color: isActive ? "#ffc864" : "rgba(255,255,255,0.7)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </List>
      </Drawer>

      {/* Top AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          ml: `${DRAWER_WIDTH}px`,
          background: "rgba(15,15,20,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pr: 1.5,
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 48 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="h6"
              component="h1"
              sx={{
                fontWeight: 600,
              }}
            >
              Magic CSS
            </Typography>
            <Box
              sx={{
                px: 1,
                py: 0.2,
                borderRadius: "6px",
                background: "rgba(255,200,100,0.1)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.55rem",
                  color: "rgba(255,200,100,0.8)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                CSS Tools
              </Typography>
            </Box>
          </Box>
        </Toolbar>

        <Tooltip
          title="View on GitHub"
          placement="left"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "rgba(20,20,28,0.97)",
                color: "#fff",
                fontSize: "0.68rem",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
              },
            },
            arrow: { sx: { color: "rgba(20,20,28,0.97)" } },
          }}
        >
          <a
            href="https://github.com/parham-ab/React-magic-css"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              size="small"
              sx={{
                color: "rgba(255,255,255,0.45)",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
                p: 0.8,
                "&:hover": {
                  color: "#fff",
                  background: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.18)",
                },
                transition: "all 0.2s",
              }}
            >
              <GitHubIcon sx={{ fontSize: "1.1rem" }} />
            </IconButton>
          </a>
        </Tooltip>
      </AppBar>

      <Toolbar variant="dense" sx={{ minHeight: 48 }} />
    </Box>
  );
};

export default Header;
