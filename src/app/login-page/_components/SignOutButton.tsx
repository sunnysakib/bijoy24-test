"use client";
import { Button } from "antd";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <Button onClick={() => signOut({ callbackUrl: '/login-page' })}>Sign Out</Button>
    );
}