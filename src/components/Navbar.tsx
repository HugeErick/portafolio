import { metadata } from "@/app/layout";
import Link from "next/link";
import { Icons } from "./Icons";
import DarkModeSwitch from "./DarkModeSwitch";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { UserAccountNav } from "./UserAccountNav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed top-0 inset-x-0 h-fit dark:bg-black bg-zinc-100 light:text-black dark:text-white border-b border-zinc-600 border-opacity-60 z-[10] py-3">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex gap-2 items-center bg-cyan-500 text-white px-4 rounded-[2vh] py-1"
        >
          <Icons.zap className="h-8 w-8" />
          <p className="hidden light:text-zinc-700 text-inherit text-sm font-medium md:block">
            {String(metadata.title)}
          </p>
        </Link>
        <DarkModeSwitch />

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href="/sign-in"
            className={cn(buttonVariants(), "rounded-[2vh] dark:bg-white dark:text-black")}
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
