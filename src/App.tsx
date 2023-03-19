import React, { useState } from "react";
import AzarashiSvg from "./components/AzarashiSvg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Paper,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function App(): JSX.Element {
  const [bodyColor, setBodyColor] = useState("#ffffff");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [cheekColor, setCheekColor] = useState("#FBBABA");
  const [mouthColor, setMouthColor] = useState("#DCDCDC");
  type BeardNumber = 2 | 3;
  const [beardNumber, setBeardNumber] = useState<BeardNumber>(2);
  type HatType = "none" | "normal" | "santa" | "witch";
  const [hatType, setHatType] = useState<HatType>("none");
  return (
    <>
      <AppBar>
        <Toolbar>
          <Stack spacing={2} direction="row" flexGrow={1}>
            <img src="/logo.svg" alt="logo" height="30px" />
            <Typography variant="h5" component="div">
              Azarashi Creator
            </Typography>
          </Stack>
          <IconButton
            color="inherit"
            href="https://github.com/chvmvd/azarashi-creator"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
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
              <FormControl>
                <FormLabel>Hat Type</FormLabel>
                <RadioGroup
                  value={hatType}
                  onChange={(e) => {
                    setHatType(e.target.value as HatType);
                  }}
                >
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="santa"
                    control={<Radio />}
                    label="Santa"
                  />
                  <FormControlLabel
                    value="witch"
                    control={<Radio />}
                    label="Witch"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <AzarashiSvg
              bodyColor={bodyColor}
              eyeColor={eyeColor}
              cheekColor={cheekColor}
              mouseColor={mouthColor}
              beardNumber={beardNumber}
              hatType={hatType}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
