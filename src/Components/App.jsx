import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                Hello
        </ThemeProvider>
    );
}

export default App;
