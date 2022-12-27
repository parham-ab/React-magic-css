import FormControl from "@mui/material/FormControl";
// icon
import SearchIcon from "@mui/icons-material/Search";
// custom hooks
import UseTitle from "../hooks/useTitle";
// copy to clipboard button
import copy from "copy-to-clipboard";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./functions/toast";
import { Container } from "@mui/system";
import {
  Grid,
  TextField,
  Box,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ColorGenerator = () => {
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
            type="text"
            InputProps={{
              endAdornment: (
                <SearchIcon
                  sx={{ cursor: "pointer", color: "text.secondary" }}
                  onClick={(e) => console.log(3)}
                />
              ),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ColorGenerator;
