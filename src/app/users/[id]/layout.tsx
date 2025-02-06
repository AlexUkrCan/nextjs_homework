import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Userslayout metadata",

};
type Props = {children:React.ReactNode}
const Layout = ({children}:Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;