import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const TabsContainer = styled(Paper)(({ theme }) => ({
  display: "inline-flex",
  padding: theme.spacing(1),
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  borderRadius: 12,
  width: "fit-content",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    padding: theme.spacing(0.75),
    "& .MuiStack-root": {
      width: "100%",
      justifyContent: "space-around",
    },
  },
}));

export default TabsContainer;
