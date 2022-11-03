import { Work } from "@/utils/resume.ts";
import { WorkCard } from "@/components/WorkCard.tsx";
import { Card } from "@/components/Card.tsx";

export function Experience(props: { data: Array<Work> }) {
  const { data } = props;

  return (
    <section class="w-full">
      <Card
        image_url="activity"
        heading="Experience"
        subHeading="What have I done."
        from="emerald-500"
        to="red-500"
      >
        {data?.map((work) => (
          <WorkCard work={work} />
        ))}
      </Card>
    </section>
  );
}
