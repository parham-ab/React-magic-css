import { copy } from "copy-to-clipboard";
import { notify } from "./toast";

export const copyToClipboard = (source) => {
  copy(source);
  notify("success", "Copied to clipboard ✔");
};
