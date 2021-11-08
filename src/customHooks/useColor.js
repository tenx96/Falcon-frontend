export default () => {
  const mode = "dark";
  const isDark = mode === "dark";

  return {
    accent: {
      main: isDark ? "#f50057" : "#ff9100",
      secondary: isDark ? "#ab003c" : "#ff9100",
    },
    background: {
      main: "#121212",
      paper: "#181818",
      hover: "#282828",
    },
  };
};


