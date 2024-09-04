/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Befc3xVZvXX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { InferEntrySchema } from "astro:content";
import {
  format,
  parseISO,
  isToday,
  isThisMonth,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import Stats from "./projects/Stats";

export default function Project({
  props,
  children,
}: {
  props: {
    id: string;
    slug: string;
    body: string;
    collection: "projects";
    data: InferEntrySchema<"projects">;
  };
  children: any;
}) {
  const formattedDate = format(props.data.date, "MMMM yyyy");
  return (
    <div className="w-full">
      <section className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-6 md:grid-cols-[3fr_3fr] lg:gap-12">
        <div className="grid gap-4 md:gap-8">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              <CarouselItem>
                <img
                  src={props.data.image}
                  width={800}
                  height={1200}
                  alt="Project Image"
                  className="aspect-[2/3] w-full overflow-hidden rounded-lg border object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="grid gap-4 md:gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{props.data.title}</h1>
            <p className="text-muted-foreground">
              Completed in {formattedDate}
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>{props.data.description}</p>
            {children}
          </div>
        </div>
      </section>
      <Stats/>
    </div>
  );
}
