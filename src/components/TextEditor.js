import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// icons
import AssignmentIcon from "@mui/icons-material/Assignment";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.3),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const TextEditor = () => {
  const [inputVal, setInputVal] = useState("");
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState("");
  const [fontSetting, setFontSetting] = useState({
    bold: false,
    italic: false,
    underlined: "false",
  });

  //   const [finalSource, setFinalSource] = useState({
  //     textAlign: "",
  //     textFormat: "",
  //   });

  //   useEffect(() => {
  // setFinalSource({...finalSource},[])
  //   }, [alignment, setAlignment]);
  // text format
  const handleFormat = (e, newFormats) => {
    setFormats(newFormats);
  };
  // text alignment
  const handleAlignment = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="lg">
      <Grid container flexDirection="column">
        <Grid item sx={{ margin: "60px auto" }}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              flexWrap: "wrap",
            }}
          >
            <Stack>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                name="alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified">
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </StyledToggleButtonGroup>

              <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                sx={{ margin: "auto" }}
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
              </StyledToggleButtonGroup>
            </Stack>
          </Paper>
        </Grid>
        {/* text field */}
        <Grid
          item
          alignItems="center"
          sx={{
            margin: "1rem auto 0",
          }}
        >
          <TextField
            size="small"
            label="Text"
            variant="filled"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </Grid>
        {/* results */}
        <Grid
          item
          mt={5}
          sx={{ margin: "4rem auto" }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            className="custom-box"
            textAlign={alignment}
            padding={6}
            sx={{ height: inputVal && "auto" }}
          >
            <Typography
              variant="h5"
              color="initial"
              fontWeight={formats.includes("bold") ? "bold" : 100}
              sx={{ wordBreak: "break-all" }}
            >
              {inputVal}
              {/* {testText} */}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TextEditor;
