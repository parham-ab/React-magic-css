import { notify } from "./toast";

export const copyToClipboard = (source) => {
  navigator.clipboard.writeText(source);
  notify("success", "Copied to clipboard ✔");
};
