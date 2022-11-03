import { ServerCodePage } from "@/routes/_404.tsx";

export default function InternalServerError() {
  return ServerCodePage({
    serverCode: 500,
    codeDescription: "Oops! Something went wrong.",
  });
}
