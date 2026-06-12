import toast from "react-hot-toast";

export const notify = (type, text) => {
  toast[type](text, {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#1a1a2e",
      color: "#fff",
      fontSize: "0.9rem",
      fontWeight: 500,
      borderRadius: "8px",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  });
};
