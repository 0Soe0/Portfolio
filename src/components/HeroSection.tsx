import { ArrowDown } from "lucide-react";
import { Button } from "./Button";
import { ScrollClouds } from "./ScrollClouds";
import { useTheme } from "../contexts/ThemeContext";
import { useMediaQuery } from "react-responsive";
import { smoothScrollTo } from "../lib/utils";

export const HeroSection = () => {
  const { isDark } = useTheme();
  //library used to check if the screen is xl and show scrollable clouds
  const isXl = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10 relative">
          {!isDark && isXl && <ScrollClouds />}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-white dark:text-foreground dark:opacity-0 dark:animate-fade-in">
                Hey! I'm{" "}
              </span>
              <span className=" text-black dark:text-primary dark:opacity-0 dark:animate-fade-in-delay-1">
                Sophia,{" "}
              </span>
              <span className="text-white dark:text-foreground dark:opacity-0 dark:animate-fade-in-delay-2">
                web developer :)
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white dark:text-muted-foreground max-2-2xl mx-auto dark:opacity-0 dark:animate-fade-in-delay-3">
              <span className="block mt-5 mb-5">
                I always say that we are like little bags full of the
                experiences we've had, and I can't wait to adquire some on the
                professional field.
              </span>

              <span className="block mb-5">
                Hope we can work together sometime!
              </span>
            </p>

            <div className="dark:opacity-0 dark:animate-fade-in-delay-4">
              <Button
                className="black-hover"
                onClick={() => smoothScrollTo("#projects", 1200)}
              >
                Take a look at my work
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white dark:text-muted-foreground mb-2">
            Scroll
          </span>

          <ArrowDown className="h-5 w-5 text-black dark:text-primary"></ArrowDown>
        </div>
      </section>
    </>
  );
};
