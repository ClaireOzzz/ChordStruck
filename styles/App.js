// import React from 'react';
// import {
//   Outlet,
// } from "react-router-dom";

// // import mui
// import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// // import local files
// import './page1.jsx';
// import "./App.css";

// function App() {
//   // set up app theme
//   const theme = createTheme({
//     typography: {
//         "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
//         "fontSize": 14,
//         "fontWeightLight": 300,
//         "fontWeightRegular": 400,
//         "fontWeightMedium": 500
//     },
//     palette: {
//       primary: {
//         main: '#D22108',
//       },
//     },
//   });

//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//         {/* overwrite css order */}
//         <StyledEngineProvider injectFirst>
//           {/* all routes found in AppRoutes */}
//           <page1 />
//           <Outlet />
         
//         </StyledEngineProvider>
//       </ThemeProvider>

//     </div >
//   );
// }

// export default App;
