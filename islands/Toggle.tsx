import { Icon } from "@/components/Icon.tsx";
import useDarkMode from "@/utils/useDarkMode.ts";

export default function Toggle() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <span
      onClick={toggle}
      class="cursor-pointer fixed z-50 right-8 top-8"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Icon url="moon" class="text-yellow-400 -rotate-12" />
      ) : (
        <Icon url="sun" class="text-sky-800" />
      )}
    </span>
  );
}
