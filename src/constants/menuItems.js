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
    text: "shadow-generator",
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
    text: "text-shadow-generator",
    icon: (
      <FormatColorTextIcon color="text.secondary" sx={{ fontSize: "16px" }} />
    ),
    path: "/pages/text-shadow-generator",
  },
  {
    text: "border-radius",
    icon: <VignetteIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/border-radius",
  },
  {
    text: "skew",
    icon: <AspectRatioIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/skew",
  },
  {
    text: "text-generator",
    icon: <ColorLensIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/color-picker",
  },
  {
    text: "text-editor",
    icon: <FormatSizeIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/text-editor",
  },
  {
    text: "color-generator",
    icon: <FormatPaintIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/color-generator",
  },
  {
    text: "markdown-generator",
    icon: (
      <BsMarkdownFill color="text.secondary" style={{ fontSize: "16px" }} />
    ),
    path: "/pages/markdown",
  },
  {
    text: "Image-filter",
    icon: <ImageIcon color="text.secondary" sx={{ fontSize: "16px" }} />,
    path: "/pages/image-filter",
  },
];
