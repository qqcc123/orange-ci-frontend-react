import * as React from "react";
import { NavLink, redirect } from "react-router-dom";
import { Space, Table, Tag, Select  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import BuildPage from '@component/build'
import Search from "@component/build/search";

export default function Build(): React.JSX.Element {
    return (
        <div id="nav_build">
            <Search />
            <BuildPage/>
        </div> 
    )
}

export async function buildAction() {
    console.log("---------buildAction---------------")
    return {} //redirect(`/publish`)
}

export async function buildLoader({ request } : any) {
    console.log("---------buildLoader---------------")
    return {}
}