import { PageProps, Handlers } from "$fresh/server.ts";
import { Resume } from "@/utils/resume.ts";
import { Summary } from "@/components/Summary.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Skills } from "@/components/Skills.tsx";
import { Experience } from "@/components/Experience.tsx";
import { Tech } from "@/components/Tech.tsx";
import Toggle from "@/islands/Toggle.tsx";

export const handler: Handlers<Resume | null> = {
  GET: async (_, ctx) => {
    const resp = await fetch(
      `https://api.github.com/gists/6c826f000b9d865a34c0ba6a4841cdb1`
    );
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const result = await resp.json();
    const resume: Resume = JSON.parse(result.files["resume.json"].content);
    resume.basics.title = "Senior Software Engineer";
    return ctx.render(resume);
  },
};

export default function Home({ data }: PageProps<Resume | null>) {
  if (!data) {
    return (
      <main class={`bg-white dark:bg-gray-900 flex flex-col gap-6 p-6`}>
        <Summary
          data={{
            name: "Wisam Al Abed",
            title: "Senior Software Engineer",
            label:
              "Oops! Something went wrong. Looks like I couldnt fetch all my data",
          }}
        />
        <Tech />
        <Footer />
      </main>
    );
  }

  return (
    <main
      class={`bg-[#e2e8f0] dark:bg-gray-900 flex flex-col gap-6 p-6 transition duration-500`}
    >
      <Toggle />
      <Summary data={data.basics} />
      <Skills data={data.skills} />
      <Experience data={data.work} />
      <Tech />
      <Footer />
    </main>
  );
}
