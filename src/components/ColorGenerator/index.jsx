import { v4 as uuidv4 } from "uuid";
import Values from "values.js";
import SearchIcon from "@mui/icons-material/Search";
import colorListImg from "../../assets/img/colors.svg";
import UseTitle from "../../hooks/useTitle";
import { Container } from "@mui/system";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import SingleColor from "./SingleColor";
import { notify } from "../../utils/toast";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
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
    </Container>
  );
};

export default ColorGenerator;
