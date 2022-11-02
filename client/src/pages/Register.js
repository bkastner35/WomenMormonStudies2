import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import CatagoryBox from '../componenet/CatagoryBox';
import emailjs from "emailjs-com"




const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

export default function Register() {
  const userInput = React.useRef();
  const emailInput = React.useRef();
  const passwordInput = React.useRef();

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(userInput.current)
    console.log(emailInput.current)
    console.log(passwordInput.current)


    event.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_owv6uf2', 'template_8mdujsg', event.target, 'gwLqAr-2_XGu3Hkxo')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });



  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
          <WebImage alt="a decorative tree"/>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              ref = {userInput}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              ref = {emailInput}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus

            />
            <TextField
              ref = {passwordInput}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CatagoryBox key = {1} name = "Method/Approach" options = {method}></CatagoryBox>
            <CatagoryBox key = {2} name = "Topic" options = {topic}></CatagoryBox>
            <CatagoryBox key = {3} name = "Time Period" options = {catagory}></CatagoryBox>
            <CatagoryBox key = {4} name = "Geography" options = {location}></CatagoryBox>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white'}}
            >
              Register
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

//methods

const catagory = [
  "19th century",
  "20th century",
  "21st century",
  "NA",
];

const method = [
  "Anthropology",
  "Area Studies",
  "Art History",
  "Creative Writing",
  "Disability Studies",
  "Economics",
  "Ethnography",
  "Ethnohistory",
  "Gender Studies",
  "Genealogy",
  "Geography",
  "History",
  "Linguistics",
  "Literary Criticism",
  "Oral History",
  "Performance Studies",
  "Philosophy",
  "Political Science",
  "Psychology",
  "Public History",
  "Religious Studies",
  "Rhetoric/Communication",
  "Sociology",
  "Statistics",
  "Theology",
  "NA",
  ];

  const location = [
    "Africa",
    "Asia",
    "Australia and/or New Zealand",
    "Pacific Islands",
    "Europe",
    "United States and/or Canada",
    "Latin America and/or Caribbean",
    "Middle East",
    "NA",
  ];


const topic = [
"Aesthetics",
"Anti-Mormonism",
"Biography",
"Childhood/Youth",
"Church Membership",
"Church of Jesus Christ of Latter-day Saints",
"Colonialism/imperialism",
"Community of Christ (formerly Reorganized Church of Jesus Christ of Latter Day Saints)",
"Critical Race Studies",
"Creative Writing (Fiction/Nonfiction/Poetry/etc.)",
"Cultural History",
"Demography",
"Disability Studies",
"Drama",
"Ecclesiology",
"Economics",
"Ethics",
"Family structure",
"Film",
'Folklore/Storytelling',
'Food',
'Gender/Femininity/Masculinity/Sexuality',
'Globalization',
'Healing',
'Interfaith/Interreligious Relations/Dialogue',
'Literature',
'Material Culture',
'Missions/Missiology',
'Motherhood',
'Music',
'Other Mormon Traditions (AUB/Bickertonite/FLDS/Strangite/etc.)',
'Performance',
'Philosophy',
'Psychology',
'Politics/Political Issues/Political Engagement',
'Popular Culture',
'Race/Ethnicity',
'Ritual Studies',
'Sacred Space',
'Scripture',
'Social History',
'Social Justice',
'Sociology of Religion',
'Technical Communication',
'Temples',
'Theology',
'Translation',
'Visual Culture',
'Women’s History',
'NA',
];