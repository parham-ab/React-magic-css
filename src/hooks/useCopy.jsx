import { useCallback, useState } from "react";
import { copyToClipboard } from "../utils/copyToClipboard";

export const useCopy = (timeout = 1800) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    (content) => {
      copyToClipboard(content);
      setCopied(true);
      const timer = setTimeout(() => setCopied(false), timeout);
      return () => clearTimeout(timer); // Cleanup function
    },
    [timeout],
  );

  return { copied, copy };
};
