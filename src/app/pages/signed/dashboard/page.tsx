"use client";

import React from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import NavBar from "@/app/components/navBar/page";

export default function Dashboard(props: any){
    const paramEmail = props.searchParams.email;

    return(
        <h1>{paramEmail}</h1>
    )
}