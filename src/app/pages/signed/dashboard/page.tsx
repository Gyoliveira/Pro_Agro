"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/app/components/navBar/page";

export default function Dashboard(){
    const router = usePathname();

    return(
        <h1>Dashboard</h1>
    )
}