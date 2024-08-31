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

const projects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application for task management",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Beta Mobile App",
    description: "Cross-platform mobile app for fitness tracking",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Gamma Analytics",
    description: "Data visualization dashboard for business intelligence",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "D3.js", "Python"],
  },
  {
    title: "Delta E-commerce",
    description: "Full-featured online store with secure payments",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-gray-100 py-12 flex justify-center dark:bg-gray-800 ">
      <div className="container ">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="h-[200px] w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
