import BorderRadius from "../pages/border-radius";
import ColorGenerator from "../pages/color-generator";
import ColorPicker from "../pages/color-picker";
import Gradient from "../pages/gradient";
import ImageFilter from "../pages/image-filter";
import MarkdownGenerator from "../pages/markdown-generator";
import ShadowGenerator from "../pages/shadow-generator";
import Skew from "../pages/skew";
import TextEditor from "../pages/text-editor";
import TextShadowGenerator from "../pages/text-shadow-generator";

const mainRoutes = [
  {
    title: "shadow-generator",
    path: "/pages/shadow-generator",
    component: ShadowGenerator,
  },
  {
    title: "gradient",
    path: "/pages/gradient",
    component: Gradient,
  },
  {
    title: "text-shadow-generator",
    path: "/pages/text-shadow-generator",
    component: TextShadowGenerator,
  },
  {
    title: "border-radius",
    path: "/pages/border-radius",
    component: BorderRadius,
  },
  {
    title: "image-filter",
    path: "/pages/image-filter",
    component: ImageFilter,
  },
  {
    title: "skew",
    path: "/pages/skew",
    component: Skew,
  },
  {
    title: "color-picker",
    path: "/pages/color-picker",
    component: ColorPicker,
  },
  {
    title: "color-generator",
    path: "/pages/color-generator",
    component: ColorGenerator,
  },
  {
    title: "text-editor",
    path: "/pages/text-editor",
    component: TextEditor,
  },
  {
    title: "markdown",
    path: "/pages/markdown",
    component: MarkdownGenerator,
  },
];

export { mainRoutes as routes };
