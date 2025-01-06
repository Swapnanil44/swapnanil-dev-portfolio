import { Contact } from "@/components/contact";
import {Hero} from "@/components/hero";
import { LinkMinimap } from "@/components/link-minimap";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <main className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-16 pt-20 pb-40 relative">
      <Hero/>
      <Separator/>
      <Skills/>
      <Separator/>
      <Projects/>
      <Separator/>
      <Contact/>
      <Separator/>
      <Socials/>
      <LinkMinimap/>
    </main>
    );
}
