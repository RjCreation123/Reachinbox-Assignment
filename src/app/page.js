import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to ReachInbox!</h1>
      <Link href="/login">
        <span className="text-blue-500 hover:underline">Go to Login</span>
      </Link>
    </div>
  );
}
