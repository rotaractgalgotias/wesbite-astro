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
  type CarouselApi,
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
import React from "react";

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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="container w-full">
      <section className="mx-auto grid items-start gap-8 px-4 py-6 md:grid-cols-[3fr_3fr] lg:gap-12">
        <div className="flex flex-col justify-center gap-3 lg:gap-6">
          <div className="space-y-2 lg:hidden">
            <h1 className="text-3xl font-bold">{props.data.title}</h1>
            <p className="text-muted-foreground">
              Completed in {formattedDate}
            </p>
          </div>
          <div>
            <Carousel
              className="relative overflow-hidden lg:w-full lg:overflow-visible"
              setApi={setApi}
            >
              <CarouselContent>
                {props.data.images ? (
                  props.data.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        width={800}
                        height={1200}
                        alt="Project Image"
                        className="aspect-square w-full overflow-hidden rounded-lg border object-cover lg:aspect-video"
                      />
                    </CarouselItem>
                  ))
                ) : (
                  <CarouselItem>
                    <img
                      src={props.data.image}
                      width={800}
                      height={1200}
                      alt="Project Image"
                      className="aspect-square w-full overflow-hidden rounded-lg border object-cover lg:aspect-video"
                    />
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Picture {current} of {count}
            </div>
          </div>
          <Stats data={props.data} />
        </div>
        <div className="grid gap-4">
          <div className="space-y-2 hidden lg:block">
            <h1 className="text-3xl font-bold">{props.data.title}</h1>
            <p className="text-muted-foreground">
              Completed in {formattedDate}
            </p>
          </div>
          <div className="prose-p:text-normal prose prose-p:my-2 prose-p:text-justify">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
