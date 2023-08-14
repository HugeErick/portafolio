"use client";

import Image from "next/image";
import img1 from "../../../public/img1.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/Dropdown-menu";
import { Button } from "../ui/Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const MyProfileShown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollTo = (stringTo: string) => {
    router.push(`${pathname}#${stringTo}`);
  };

  return (
    <div className="my-4 flex flex-col items-center mx-auto">
      <Image
        src={img1}
        alt="my profile pic"
        className="w-40 rounded-[2vh] border"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-full my-2 rounded-[2vh] dark:bg-white dark:text-black">
            Know me
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="dark:bg-white dark:text-black bg-zinc-800 text-white w-full"
          align="end"
        >
          <DropdownMenuItem asChild>
            <Link
              href="https://docs.google.com/document/d/1jFxvzKAhdGS5MM9No4HumuOJSgfa1pSPJFX5P0Q0w50/edit?pli=1"
              target="_blank"
            >
              CV
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("projects");
              }}
            >
              View projects
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("skills");
              }}
            >
              View skills
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyProfileShown;
