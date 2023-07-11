import * as React from 'react'
import { useEffect } from "react";
import "../style/main.css"
import { redirect, Outlet, Form, NavLink } from 'react-router-dom'

interface navType {
    id: number, 
    title: string, 
    router: string, 
    icon: string
}

export default function Main() {
    useEffect(() => {
        window.location.hash = '/home';
    })

    const [navList, setNavList] = React.useState([
        { id: 1, title: '首页', router: 'home', icon: '.png' }, 
        { id: 2, title: '构建信息', router: 'build', icon: '.png' },
        { id: 3, title: '接入项目', router: 'access', icon: '.png' },
        { id: 4, title: '发布项目', router: 'publish', icon: '.png' },
        { id: 5, title: '微前端管理', router: 'microFedManage', icon: '.png' }
    ])

    return (
        <div id="appRoot">
            <div id="rootHeader">

            </div>
            <div id="rootBody">
                <nav id="rootBody_nav">
                    <ul>
                        {navList.map((item: navType) => (
                            <li key={item.id}>
                                <NavLink style={{textDecoration: 'none'}} to={item.router}>
                                    <h3>{item.title}</h3>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Outlet />
            </div>
            <div id="rootBottom">

            </div>
        </div>
    )   
}

export async function mainAction({ request } : any) {
    const url = new URL(request.url);
    console.log("---------mainAction---------------")
    return {}
}

export async function mainLoader({ request }: any) {
    console.log("---------mainLoader---------------")
    return {}
}
