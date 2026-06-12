import { useState } from "react";
import { Grid, Typography, Box, Chip } from "@mui/material";
import Html from "./Html";
import SNIPPETS from "../constants/snippets";

const Text = () => {
  const [inputVal, setInputVal] = useState("");
  const insertSnippet = (value) => {
    setInputVal(
      (prev) => prev + (prev && !prev.endsWith("\n") ? "\n" : "") + value,
    );
  };

  return (
    <Grid container spacing={3} alignItems="flex-start">
      {/* LEFT — Markdown Input */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            Markdown Input
          </Typography>

          {/* Quick-insert snippets */}
          <Box display="flex" flexWrap="wrap" gap={0.8}>
            {SNIPPETS?.map((s) => (
              <Chip
                key={s.label}
                label={s.label}
                size="small"
                onClick={() => insertSnippet(s.value)}
                sx={{
                  height: 24,
                  fontSize: "0.62rem",
                  cursor: "pointer",
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255,200,100,0.1)",
                    color: "#ffc864",
                    borderColor: "rgba(255,200,100,0.3)",
                  },
                }}
              />
            ))}
          </Box>

          <textarea
            name="markdownInput"
            placeholder={
              "# Start writing markdown...\n\nSupports **bold**, _italic_, `code`, lists, links & more."
            }
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            style={{
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: "13px",
              resize: "vertical",
              outline: "none",
              boxSizing: "border-box",
              lineHeight: 1.7,
              transition: "border-color 0.2s",
              padding: "0.4rem",
              minHeight: "390px",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(255,200,100,0.4)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.08)")
            }
          />

          {/* Char count */}
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.2)",
              textAlign: "right",
            }}
          >
            {inputVal.length} characters · {inputVal.split("\n").length} lines
          </Typography>
        </Box>
      </Grid>

      {/* RIGHT — HTML Preview */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            HTML Preview
          </Typography>

          <Box
            className="markdown-preview"
            sx={{
              minHeight: "460px",
              borderRadius: "14px",
              padding: "10px",
              overflow: "auto",
              wordBreak: "break-word",
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.05)",
              "& h1, & h2, & h3, & h4, & h5, & h6": {
                color: "rgba(255,200,100,0.9)",
                mt: 2,
                mb: 1,
                fontWeight: 600,
              },
              "& h1": { fontSize: "1.6rem" },
              "& h2": { fontSize: "1.3rem" },
              "& h3": { fontSize: "1.1rem" },
              "& p": {
                color: "rgba(255,255,255,0.75)",
                mb: 1,
                lineHeight: 1.7,
                fontSize: "0.95rem",
              },
              "& ul, & ol": {
                color: "rgba(255,255,255,0.7)",
                pl: 3,
                mb: 1,
              },
              "& li": { mb: 0.5, fontSize: "0.95rem" },
              "& a": {
                color: "#ffc864",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              },
              "& code": {
                background: "rgba(255,200,100,0.1)",
                color: "#ffc864",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "0.85rem",
              },
              "& pre": {
                background: "rgba(0,0,0,0.5)",
                padding: "14px",
                borderRadius: "10px",
                overflow: "auto",
                border: "1px solid rgba(255,255,255,0.07)",
                mb: 2,
              },
              "& pre code": {
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                padding: 0,
              },
              "& blockquote": {
                borderLeft: "3px solid rgba(255,200,100,0.4)",
                pl: 2,
                ml: 0,
                color: "rgba(255,255,255,0.5)",
                fontStyle: "italic",
              },
              "& hr": {
                border: "none",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                my: 2,
              },
              "& strong": { color: "#fff", fontWeight: 700 },
              "& em": { color: "rgba(255,255,255,0.8)" },
            }}
          >
            {inputVal ? (
              <Html>{inputVal}</Html>
            ) : (
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.15)",
                  textAlign: "center",
                }}
              >
                Preview will appear here
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Text;
