import { v4 as uuidv4 } from "uuid";
// value js package
import Values from "values.js";
// icons
import SearchIcon from "@mui/icons-material/Search";
// custom hooks
import UseTitle from "../../hooks/useTitle";
// MUI components
import { Container } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
// components
import SingleColor from "./SingleColor";

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
      console.log(error);
    }
  };
  // dynamic title
  UseTitle("Magic CSS - Color Generator");

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center" mt={"80px"}>
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
          <div>
            {/* {console.log(list)} */}
            {list.map((item) => (
              <SingleColor key={uuidv4()} id={uuidv4()} {...item} />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ColorGenerator;
