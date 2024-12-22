"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import ProjectShowcase from "@/components/ProjectShowcase";

const ExperienceAndProjectsTabs = () => {
	return (
			<Tabs defaultValue="experience & education" className="w-full max-w-4xl z-10">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience & education">Experience</TabsTrigger>
					<TabsTrigger value="projects">Projects</TabsTrigger>
				</TabsList>
				<TabsContent value="experience & education">
					<Card>
						<CardHeader>
							<CardTitle>Professional Experience & Education</CardTitle>
							<CardDescription>My work history and skills</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Education />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="projects">
					<Card>
						<CardHeader>
							<CardTitle>Personal Projects</CardTitle>
							<CardDescription>
								Showcasing my skills and creativity
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<ProjectShowcase />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
	);
};

export default ExperienceAndProjectsTabs;

const Education = () => {
	return (
		<section className="space-y-2">
			<div>
				<h3 className="font-semibold text-2xl">Education</h3>
				<p className="mt-2">Universidad de las Americas Puebla</p>
				<p className="text-sm text-muted-foreground">
					Computer System Engineer
				</p>
			</div>
		</section>
	);
};
