import React, { useState } from "react";
import AzarashiSvg from "./components/AzarashiSvg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Grid,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ImageList,
  ListSubheader,
  ImageListItem,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactDOMServer from "react-dom/server";
import logo from "/logo.svg";
import sample1 from "/sample1.svg";
import sample2 from "/sample2.svg";
import sample3 from "/sample3.svg";
import sample4 from "/sample4.svg";
import sample5 from "/sample5.svg";
import sample6 from "/sample6.svg";
import sample7 from "/sample7.svg";
import sample8 from "/sample8.svg";

function calcBreakPoint(): "xs" | "sm" | "md" | "lg" | "xl" {
  if (useMediaQuery(useTheme().breakpoints.down("sm"))) {
    return "xs";
  } else if (useMediaQuery(useTheme().breakpoints.down("md"))) {
    return "sm";
  } else if (useMediaQuery(useTheme().breakpoints.down("lg"))) {
    return "md";
  } else if (useMediaQuery(useTheme().breakpoints.down("xl"))) {
    return "lg";
  } else {
    return "xl";
  }
}

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
            <img src={logo} alt="logo" height="30px" />
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
      <Stack m={2} spacing={2}>
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
                    row
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
                    row
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
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                  ReactDOMServer.renderToString(
                    <AzarashiSvg
                      bodyColor={bodyColor}
                      eyeColor={eyeColor}
                      cheekColor={cheekColor}
                      mouseColor={mouthColor}
                      beardNumber={beardNumber}
                      hatType={hatType}
                    />
                  )
                )}`}
                alt="azarashi image"
              />
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ p: 2 }}>
          <ImageList
            cols={
              calcBreakPoint() === "xs"
                ? 2
                : calcBreakPoint() === "sm"
                ? 3
                : calcBreakPoint() === "md"
                ? 4
                : 5
            }
          >
            <ImageListItem
              cols={
                calcBreakPoint() === "xs"
                  ? 2
                  : calcBreakPoint() === "sm"
                  ? 3
                  : calcBreakPoint() === "md"
                  ? 4
                  : 5
              }
            >
              <ListSubheader component="div">Sample</ListSubheader>
            </ImageListItem>
            <ImageListItem>
              <img src={sample1} alt="sample1" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample2} alt="sample2" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample3} alt="sample3" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample4} alt="sample4" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample5} alt="sample5" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample6} alt="sample6" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample7} alt="sample7" />
            </ImageListItem>
            <ImageListItem>
              <img src={sample8} alt="sample8" />
            </ImageListItem>
          </ImageList>
        </Paper>
      </Stack>
    </>
  );
}

export default App;
