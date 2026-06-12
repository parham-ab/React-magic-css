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
    path: "/shadow-generator",
    component: ShadowGenerator,
  },
  {
    title: "gradient",
    path: "/gradient",
    component: Gradient,
  },
  {
    title: "text-shadow-generator",
    path: "/text-shadow-generator",
    component: TextShadowGenerator,
  },
  {
    title: "border-radius",
    path: "/border-radius",
    component: BorderRadius,
  },
  {
    title: "image-filter",
    path: "/image-filter",
    component: ImageFilter,
  },
  {
    title: "skew",
    path: "/skew",
    component: Skew,
  },
  {
    title: "color-picker",
    path: "/color-picker",
    component: ColorPicker,
  },
  {
    title: "color-generator",
    path: "/color-generator",
    component: ColorGenerator,
  },
  {
    title: "text-editor",
    path: "/text-editor",
    component: TextEditor,
  },
  {
    title: "markdown",
    path: "/markdown",
    component: MarkdownGenerator,
  },
];

export { mainRoutes as routes };
