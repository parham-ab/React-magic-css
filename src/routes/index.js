import ShadowGenerator from "../components/ShadowGenerator";
import Gradient from "../components/Gradient";
import TextShadowGenerator from "../components/TextShadowGenerator";
import BorderRadius from "../components/BorderRadius";
import ImageFilter from "../components/ImageFilter";
import Donate from "../components/donation";
import Skew from "../components/Skew";
import ColorPicker from "../components/ColorPicker";
import ColorGenerator from "../components/ColorGenerator";
import TextEditor from "../components/TextEditor";
import MarkdownGenerator from "../components/MarkdownGenerator";

const mainRoutes = [
  {
    title: "shadowGenerator",
    path: "/shadowGenerator",
    component: ShadowGenerator,
  },
  {
    title: "gradient",
    path: "/gradient",
    component: Gradient,
  },
  {
    title: "textShadowGenerator",
    path: "/textShadowGenerator",
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
    title: "donation",
    path: "/donation",
    component: Donate,
  },
  {
    title: "markdown",
    path: "/markdown",
    component: MarkdownGenerator,
  },
];

export { mainRoutes as routes };
