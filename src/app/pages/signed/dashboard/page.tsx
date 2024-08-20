"use client";

import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/app/components/navBar/page";

export default function Dashboard(props: any){
    const router = useRouter();
    const { email } = router.query;
    return(
        <h1>{email}</h1>
    )
}