import React, { useState } from "react";
import AzarashiSvg from "./components/AzarashiSvg";
import { Paper, Stack, Typography } from "@mui/material";

function App(): JSX.Element {
  const [bodyColor, setBodyColor] = useState("#ffffff");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [cheekColor, setCheekColor] = useState("#FBBABA");
  const [mouseColor, setMouseColor] = useState("#DCDCDC");
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={1}>
          <Stack>
            <Typography variant="h6" component="h2">
              Body Color
            </Typography>
            <input
              type="color"
              value={bodyColor}
              onChange={(e) => {
                setBodyColor(e.target.value);
              }}
            />
          </Stack>
          <Stack>
            <Typography variant="h6" component="h2">
              Eye Color
            </Typography>
            <input
              type="color"
              value={eyeColor}
              onChange={(e) => {
                setEyeColor(e.target.value);
              }}
            />
          </Stack>
          <Stack>
            <Typography variant="h6" component="h2">
              Cheek Color
            </Typography>
            <input
              type="color"
              value={cheekColor}
              onChange={(e) => {
                setCheekColor(e.target.value);
              }}
            />
          </Stack>
          <Stack>
            <Typography variant="h6" component="h2">
              Mouse Color
            </Typography>

            <input
              type="color"
              value={mouseColor}
              onChange={(e) => {
                setMouseColor(e.target.value);
              }}
            />
          </Stack>
        </Stack>
      </Paper>
      <AzarashiSvg
        bodyColor={bodyColor}
        eyeColor={eyeColor}
        cheekColor={cheekColor}
        mouseColor={mouseColor}
        beardNumber={2}
      />
    </>
  );
}

export default App;
