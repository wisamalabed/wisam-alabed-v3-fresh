import { tw, apply } from "twind";
import { Skill } from "@/utils/resume.ts";

export function SkillCard(props: { skill: Skill }) {
  const { skill } = props;
  const pill = apply`text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded`;
  let pillColor = "bg-rose-600";
  if (skill.name.toLowerCase() === "frameworks") {
    pillColor = "bg-blue-600";
  } else if (skill.name.toLowerCase() === "devops") {
    pillColor = "bg-violet-600";
  }
  return (
    <>
      <h3 class="font-bold mb-4 mt-4">{skill.name}</h3>
      <div class="flex flex-wrap gap-4">
        {skill.keywords.map((keyword) => (
          <span class={tw`${pill} ${pillColor}`}>{keyword}</span>
        ))}
      </div>
    </>
  );
}
