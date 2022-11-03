import { Skill } from "@/utils/resume.ts";
import { SkillCard } from "@/components/SkillCard.tsx";
import { Card } from "@/components/Card.tsx";

export function Skills(props: { data: Array<Skill> }) {
  const { data } = props;

  return (
    <section class="w-full">
      <Card
        heading="Skills"
        subHeading="What am I good at."
        image_url="tool"
        from="blue-500"
        to="yellow-500"
      >
        {data?.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </Card>
    </section>
  );
}
