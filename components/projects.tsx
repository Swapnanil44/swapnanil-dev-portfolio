import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

export const Projects = () => {
  return (
    <div id="projects" className="flex flex-col gap-4">
      <h2 className={cn("text-xl font-bold", bricolageGrotesque)}>Projects</h2>
      <div className="grid gap-4">
        {PROJECTS.length > 0 && (
          <div className="w-full bg-foreground/5">
            <Link
              href={PROJECTS[0].href}
              target="_blank"
              className="group"
              prefetch={false}
            >
              <Image
                src={PROJECTS[0].coverImage}
                width={1200}
                height={600}
                alt={PROJECTS[0].title}
                className="w-full object-cover"
              />
            </Link>
            <div className="p-4 flex flex-col gap-2">
              <div className="space-y-2">
                <Link
                  href={PROJECTS[0].href}
                  target="_blank"
                  className="text-lg font-semibold hover:underline"
                >
                  {PROJECTS[0].title}
                </Link>
                <p className="text-muted-foreground text-sm">
                  {PROJECTS[0].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROJECTS[0].techStack.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-md bg-foreground/80 text-background px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        )}
        {PROJECTS.length > 0 && (
          <div className="w-full bg-foreground/5">
            <Link
              href={PROJECTS[1].href}
              target="_blank"
              className="group"
              prefetch={false}
            >
              <Image
                src={PROJECTS[1].coverImage}
                width={1200}
                height={600}
                alt={PROJECTS[1].title}
                className="w-full object-cover"
              />
            </Link>
            <div className="p-4 flex flex-col gap-2">
              <div className="space-y-2">
                <Link
                  href={PROJECTS[1].href}
                  target="_blank"
                  className="text-lg font-semibold hover:underline"
                >
                  {PROJECTS[1].title}
                </Link>
                <p className="text-muted-foreground text-sm">
                  {PROJECTS[1].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROJECTS[1].techStack.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-md bg-foreground/80 text-background px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};
