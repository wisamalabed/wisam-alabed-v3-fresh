export interface Resume {
  basics: Basic;
  skills: Array<Skill>;
  work: Array<Work>;
}

export interface Basic {
  name: string;
  title: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: string;
  location: Record<string, string>;
}

export interface Skill {
  keywords: Array<string>;
  level: string;
  name: string;
}

export interface Work {
  summary: string;
  website: string;
  name: string;
  pinned: boolean;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: Array<string>;
}

export async function getResume(): Promise<Resume> {
  const file = await Deno.readTextFile("./static/resume.json");
  const resume = JSON.parse(file);
  resume.basics.title = "Senior Software Engineer";
  return resume;
}
