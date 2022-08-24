import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import textStyle from "../../helpers/textStyle";

const Collapsable = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box style={{ borderBottom: "1px solid #330C3E" }}>
      <Typography
        style={{
          ...textStyle,
          fontWeight: 600,
          fontSize: 18,
          color: "#330C3E",
        }}
      >
        Quick Links
      </Typography>
    </Box>
  );
};

export default Collapsable;
