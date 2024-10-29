"use client";

import Image from "next/image";
import Link from "next/link";
import profileCardPicture from "@/../public/p.jpeg";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Instagram, Crown, FileUser } from "lucide-react";

const PresentationCard = () => {
	const description = `I'm a software developer with expertise in full-stack development
              and cybersecurity, love to exercise competitive programming and
              play chess`;
	return (
		<div className="w-full max-w-4xl bg-background border border-border rounded-lg shadow-lg overflow-hidden">
			<div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-6">
				<div className="flex-1 space-y-4">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
						Hi, my name is Erick
					</h1>
					<Separator className="my-4" />
					<section className="text-lg text-muted-foreground mb-4">
						<footer>{description}</footer>
					</section>
					<Separator className="mt-10 my-4" />
					<div className="flex flex-row items-center justify-between mx-2 px-2 my-2">
						<Link
							href="https://www.linkedin.com/in/erick-gonzalez-810883335/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
						</Link>
						<Separator className="h-6" orientation="vertical" />
						<Link
							href="https://github.com/HugeErick/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
						</Link>
						<Separator className="h-6" orientation="vertical" />
						<Link href="#" target="_blank" rel="noopener noreferrer">
							<FileUser className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
						</Link>
						<Separator className="h-6" orientation="vertical" />
						<Link
							href="https://www.instagram.com/erickgonzalez634/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
						</Link>
						<Separator className="h-6" orientation="vertical" />
						<Link
							href="https://www.chess.com/member/ilovefirouzja"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Crown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
						</Link>
					</div>
				</div>
				<div className="flex-shrink-0 border-4 border-muted rounded-lg overflow-hidden">
					<Image
						src={profileCardPicture}
						width={300}
						height={300}
						alt="Profile Picture of Erick"
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default PresentationCard;
