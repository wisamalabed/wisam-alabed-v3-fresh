import { PageProps, Handlers } from "$fresh/server.ts";

import { Resume, getResume } from "@/utils/resume.ts";
import { Summary } from "@/components/Summary.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Skills } from "@/components/Skills.tsx";
import { Experience } from "@/components/Experience.tsx";
import { Tech } from "@/components/Tech.tsx";

export const handler: Handlers<Resume | null> = {
  GET: async (_, ctx) => {
    const resume = await getResume();
    if (!resume) {
      return ctx.render(null);
    }
    return ctx.render(resume);
  },
};

export default function Home({ data }: PageProps<Resume | null>) {
  if (!data) {
    return <h1>Data not found</h1>;
  }

  return (
    <main class="bg-gray-900 flex flex-col gap-6 p-6">
      <Summary data={data.basics} />
      <Skills data={data.skills} />
      <Experience data={data.work} />
      <Tech />
      <Footer />
    </main>
  );
}
