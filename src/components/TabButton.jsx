import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 8,
  textTransform: "none",
  padding: "10px 20px",
  fontWeight: 500,
  minWidth: 140,
  transition: "all 0.2s ease",
  ...(active
    ? {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: theme.palette.common.white,
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }
    : {
        backgroundColor: "transparent",
        color: "#aaaaaa",
        border: "1px solid rgba(170, 170, 170, 0.2)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
      }),
}));

export default TabButton;
