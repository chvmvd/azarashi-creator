import React, { useState } from "react";
import AzarashiSvg from "./components/AzarashiSvg";
import {
  Paper,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function App(): JSX.Element {
  const [bodyColor, setBodyColor] = useState("#ffffff");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [cheekColor, setCheekColor] = useState("#FBBABA");
  const [mouseColor, setMouseColor] = useState("#DCDCDC");
  type BeardNumber = 2 | 3;
  const [beardNumber, setBeardNumber] = useState<BeardNumber>(2);
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
          <FormControl>
            <FormLabel>the number of beard</FormLabel>
            <RadioGroup
              value={beardNumber}
              onChange={(e) => {
                setBeardNumber(Number(e.target.value) as BeardNumber);
              }}
            >
              <FormControlLabel value={2} control={<Radio />} label="2" />
              <FormControlLabel value={3} control={<Radio />} label="3" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>
      <AzarashiSvg
        bodyColor={bodyColor}
        eyeColor={eyeColor}
        cheekColor={cheekColor}
        mouseColor={mouseColor}
        beardNumber={beardNumber}
      />
    </>
  );
}

export default App;
