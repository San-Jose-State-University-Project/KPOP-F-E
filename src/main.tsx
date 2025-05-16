import { createRoot } from 'react-dom/client'
import GlobalStyle from "./styles/style.ts";
import Home from './pages/home/home.tsx';
import {theme} from "./styles/theme.ts";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trand from "./pages/trand/trand.tsx";
import Search from "./pages/search/search.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={'/trand'} element={<Trand />} />
                <Route path={"/search"} element={<Search /> }/>
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
)
