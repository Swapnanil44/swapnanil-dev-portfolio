import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { CodeXml} from "lucide-react";

export const Hero = () => {
  return (
    <div id="about" className="flex flex-col gap-10">
      <CodeXml size={40} />
      <h1 className={cn(bricolageGrotesque, "text-3xl font-bold uppercase")}>
        Swapnanil Majumdar
      </h1>
      <div className="flex flex-col gap-2">
        <h5 className="font-semibold text-xl">
        Turning coffee into code and bugs into features, one line at a time!
        </h5>
        <p className="text-sm w-2/3 opacity-80">
         I'm <b>Swapnanil Majumdar</b>, a passionate fullstack web developer specializing in building dynamic and user-friendly web applications.
         As a fresher, I bring enthusiasm, a love for learning, and a knack for tackling challenges head-on.
        </p>
      </div>
    </div>
  );
};
