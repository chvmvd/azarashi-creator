import React, { useState } from "react";
import AzarashiSvg from "./components/AzarashiSvg";
import {
  Paper,
  Stack,
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
  const [mouthColor, setMouthColor] = useState("#DCDCDC");
  type BeardNumber = 2 | 3;
  const [beardNumber, setBeardNumber] = useState<BeardNumber>(2);
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Body Color</FormLabel>
            <input
              type="color"
              value={bodyColor}
              onChange={(e) => {
                setBodyColor(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Eye Color</FormLabel>
            <input
              type="color"
              value={eyeColor}
              onChange={(e) => {
                setEyeColor(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cheek Color</FormLabel>
            <input
              type="color"
              value={cheekColor}
              onChange={(e) => {
                setCheekColor(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mouth Color</FormLabel>
            <input
              type="color"
              value={mouthColor}
              onChange={(e) => {
                setMouthColor(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>The Number of Beard</FormLabel>
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
        mouseColor={mouthColor}
        beardNumber={beardNumber}
      />
    </>
  );
}

export default App;
