import { Particles } from "@/components/magicui/particles";
import { useTheme } from "@/context/theme-context";

export function AboutMe() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-primary">
        Yashdeep Tandon
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={theme === "light" ? "#000" : "#fff"}
        refresh
      />
    </div>
  );
}
