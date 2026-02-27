import { v4 as uuidv4 } from "uuid";
import Values from "values.js";
import SearchIcon from "@mui/icons-material/Search";
import colorListImg from "../../assets/img/colors.svg";
import UseTitle from "../../hooks/useTitle";
import { Container } from "@mui/system";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Fade,
} from "@mui/material";
import { useState } from "react";
import SingleColor from "./SingleColor";
import { notify } from "../../utils/toast";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
      notify("error", "Please enter a valid color!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  UseTitle("Magic CSS - Color Generator");

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box textAlign="center" pt={5} pb={3}>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Color Generator
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.95rem",
            fontWeight: 300,
          }}
        >
          Enter a hex or color name — get a full tint & shade palette
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        justifyContent="center"
        mb={7}
      >
        <Box sx={{ position: "relative", width: { xs: "200", sm: 370 } }}>
          <TextField
            className="search-field"
            id="color-info"
            size="small"
            label="Color value"
            variant="filled"
            placeholder="#f15025"
            type="text"
            value={color}
            error={error}
            onChange={(e) => setColor(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSubmit}
                    sx={{
                      color: "rgba(255,200,100,0.75)",
                      "&:hover": {
                        color: "#ffc864",
                        bgcolor: "rgba(255,200,100,0.08)",
                      },
                    }}
                  >
                    <SearchIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* Color preview dot */}
          {color && !error && (
            <Box
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 15,
                height: 15,
                borderRadius: "50%",
                backgroundColor: color,
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: `0 0 12px ${color}66`,
                transition: "background-color 0.3s",
              }}
            />
          )}
        </Box>
      </Box>

      {/* Color List or Empty State */}
      {list.length > 0 ? (
        <Fade in={list.length > 0} timeout={400}>
          <Box>
            {/* Section label */}
            <Typography
              sx={{
                color: "rgb(255, 255, 255)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              {list.length} shades generated
            </Typography>
            <div className="color-grid-wrapper">
              {list.map((item) => (
                <SingleColor key={uuidv4()} {...item} />
              ))}
            </div>
          </Box>
        </Fade>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "40vh", gap: 3 }}
        >
          <img src={colorListImg} alt="colors" className="empty-state-img" />
          <Typography
            sx={{
              color: "#fff",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
            }}
          >
            Your palette will appear here
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ColorGenerator;
