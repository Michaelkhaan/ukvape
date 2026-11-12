import {ReactNode} from "react";import Header from "./header";import Footer from "./footer";
export default function SiteLayout({children}:{children:ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
