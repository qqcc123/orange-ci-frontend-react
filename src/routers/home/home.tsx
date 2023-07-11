import * as React from "react";
import { NavLink, redirect } from "react-router-dom";
import "../../style/navBar.css"

interface navType {
    id: number, 
    title: string, 
    router: string, 
    icon: string
}

export default function Home() {
    return (
        <div id="root_body_home">
            
        </div> 
    )
}

export async function homeAction() {
    console.log("---------homeAction---------------")
    return {} //redirect(`/publish`)
}

export async function homeLoader({ request } : any) {
    console.log("---------homeLoader---------------")
    return {}
}