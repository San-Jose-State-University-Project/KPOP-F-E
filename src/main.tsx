import { createRoot } from 'react-dom/client'
import GlobalStyle from "./styles/style.ts";
import Home from './pages/home/home.tsx';
import {theme} from "./styles/theme.ts";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trand from "./pages/trand/trand.tsx";
import Search from "./pages/search/search.tsx";
import Artist from "./pages/artist/artist.tsx";
import SearchComparison from "@/pages/search-comparison";
import Comparison from "@/pages/comparison";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={'/trand'} element={<Trand />} />
                <Route path={"/search"} element={<Search /> }/>
                <Route path={"/artist/:id"} element={<Artist />} />
                <Route path={"/comparison/:id"} element={<SearchComparison />} />
                <Route path={"/comparison/:id/:id"} element={<Comparison />} />
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
)
