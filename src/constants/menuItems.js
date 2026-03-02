import GradientIcon from "@mui/icons-material/Gradient";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import VignetteIcon from "@mui/icons-material/Vignette";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import { BsMarkdownFill } from "react-icons/bs";

export const menuItems = [
  {
    text: "Shadow Generator",
    icon: (
      <AutoFixNormalIcon color="text.secondary" sx={{ fontSize: "16px" }} />
    ),
    path: "/pages/shadow-generator",
  },
  {
    text: "gradient",
    icon: <GradientIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/gradient",
  },
  {
    text: "TextShadowGenerator",
    icon: (
      <FormatColorTextIcon color="text.secondary" sx={{ fontSize: "16px" }} />
    ),
    path: "/pages/TextShadowGenerator",
  },
  {
    text: "BorderRadius",
    icon: <VignetteIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/border-radius",
  },
  {
    text: "skew",
    icon: <AspectRatioIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/skew",
  },
  {
    text: "textGenerator",
    icon: <ColorLensIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/color-picker",
  },
  {
    text: "textEditor",
    icon: <FormatSizeIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/text-editor",
  },
  {
    text: "colorGenerator",
    icon: <FormatPaintIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/color-generator",
  },
  {
    text: "markdownGenerator",
    icon: (
      <BsMarkdownFill color="text.secondary" style={{ fontSize: "16px" }} />
    ),
    path: "/pages/markdown",
  },
  {
    text: "ImageFilter",
    icon: <ImageIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/image-filter",
  },
];
