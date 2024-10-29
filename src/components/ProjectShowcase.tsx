const ProjectShowcase = () => {
	return (
		<section className="space-y-2">
			<div>
				<h3 className="font-semibold text-2xl">
					Courses academy videoplatform
				</h3>
				<p className="text-sm text-muted-foreground">
					React, Node.js , Express.js, CockcrouchDB(sql), JWT, Typescript
				</p>
				<p className="mt-2">
					A full-stack application for uploading courses as an administrator,
					can add videos to the database to group them into a course that a
					regular user can see in their home page
				</p>
			</div>
			<div>
				<h3 className="font-semibold text-2xl">
					Piel bonita
				</h3>
				<p className="text-sm text-muted-foreground">
					React, Nextjs, Node.js , Express.js, CockcrouchDB(sql), JWT, Typescript
				</p>
				<p className="mt-2">
					A full-stack application social-media type, where the owner can submit a post 
				</p>
			</div>
		</section>
	);
};

export default ProjectShowcase;
