import { useEffect, useState } from "preact/hooks";

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const storedDarkMode = parseJSON(
    window.localStorage.getItem("DARK_MODE"),
  ) as boolean;
  const [isDarkMode, setDarkMode] = useState<boolean>(
    defaultValue ?? storedDarkMode ?? true,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("DARK_MODE", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
  };
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}

export default useDarkMode;
