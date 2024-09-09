import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { InferEntrySchema } from "astro:content";
import sampleCover from "/src/assets/sample.jpeg";



export default function Projects({
  projects,
}: {
    projects: {
      id: string;
      slug: string;
      body: string;
      collection: "projects";
      data: InferEntrySchema<"projects">;
    }[];
  }) {
  return (
    <section className="flex w-full justify-center bg-gray-100 py-12 dark:bg-gray-800 ">
      <div className="container ">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <img
                src={project.data.image || sampleCover.src}
                alt={project.data.title}
                width={300}
                height={200}
                className="h-[200px] w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{project.data.title}</CardTitle>
                <CardDescription>{project.data.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {/* {project.data..map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))} */}
                </div>
              </CardContent>
              <CardFooter>
                <a className="w-full" href={`/sponsor-us/projects/${project.slug}`} target="_blank">
                  <Button className="w-full">Learn More</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
