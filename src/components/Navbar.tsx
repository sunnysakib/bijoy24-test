import { GET } from "@/app/api/auth/[...nextauth]/route";
import SignOutButton from "@/app/signup-page/_components/SignOutButton";
import { Button } from "antd";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
  const session = (await getServerSession(GET)) as {
    user: {
      name: string;
      email: string;
      image?: string;
    };
  };

    return (
        <div className=" bg-blue-500 flex justify-center py-3 px-3">
        <div className="container text-white flex items-center justify-between">
          <Link href="/" className="font-extrabold text-2xl">BIJOY24</Link>
          <div className="flex gap-4 flex-wrap">
            {
              session?.user ? (
                <>
                <p>welcome, <span className="font-bold text-xl">{session?.user?.name}</span></p>
            <SignOutButton/></>
              ) : (
                <Button ><Link href="/login-page">Login</Link></Button>
              )
            }

          </div>
        </div>
      </div>
    );
}