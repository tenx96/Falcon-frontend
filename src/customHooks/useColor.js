export default () => {
  const mode = "dark";
  const isDark = mode === "dark";

  return {
    text : {
        main : isDark ? "#FFFFFF" : "#121212"
    },
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


