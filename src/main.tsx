import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from "./styles/style.ts";
import Home from './pages/home/home.tsx';
import {theme} from "./styles/theme.ts";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trend from "@/pages/trend/trend.tsx";
import {Search} from "./pages/search/search.tsx";
import Artist from "./pages/artist/artist.tsx";
import SearchComparison from "@/pages/search-comparison";
import Comparison from "@/pages/comparison";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={'/trend'} element={<Trend />} />
                    <Route path={"/search"} element={<Search /> }/>
                    <Route path={"/artist/:name"} element={<Artist />} />
                    <Route path={"/comparison/:name"} element={<SearchComparison />} />
                    <Route path={"/comparison/:leftArtist/:rightArtist"} element={<Comparison />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>
)
