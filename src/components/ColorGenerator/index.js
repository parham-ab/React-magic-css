import { v4 as uuidv4 } from "uuid";
// value js package
import Values from "values.js";
// icons
import SearchIcon from "@mui/icons-material/Search";
// img
import colorListImg from "../../assets/img/colors.svg";
// custom hooks
import UseTitle from "../../hooks/useTitle";
// MUI components
import { Container } from "@mui/system";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
// components
import SingleColor from "./SingleColor";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../functions/toast";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  // generate color lists
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
      notify("error", "Please enter a valid color!");
    }
  };

  // dynamic title
  UseTitle("Magic CSS - Color Generator");

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mt={"80px"} textAlign="center">
          <TextField
            id="color-info"
            size="small"
            label="Color..."
            variant="filled"
            placeholder="#f15025"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            InputProps={{
              endAdornment: (
                <SearchIcon
                  sx={{ cursor: "pointer", color: "text.secondary" }}
                  type="submit"
                  onClick={handleSubmit}
                />
              ),
            }}
          />
          <Box display="flex" flexWrap="wrap" mt="100px" sx={{ ml: "50px" }}>
            {list.length ? (
              list.map((item) => <SingleColor key={uuidv4()} {...item} />)
            ) : (
              <img src={colorListImg} alt="colors" className="colorListImg" />
            )}
          </Box>
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default ColorGenerator;
