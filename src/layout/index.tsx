import * as React from "react";
import Header from "./header/header.tsx";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}