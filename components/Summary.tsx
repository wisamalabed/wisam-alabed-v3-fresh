import { asset } from "$fresh/runtime.ts";
import { Basic } from "@/utils/resume.ts";
import { tw, apply } from "twind";
import { Card } from "@/components/Card.tsx";
import { Icon } from "@/components/Icon.tsx";

export function Summary(props: { data: Basic }) {
  const { data } = props;
  const link = apply`relative group text-sky-800 hover:text-sky-900 dark:(text-rose-200 hover:text-rose-300)`;
  const linkUnderline = apply`bg-sky-900 dark:bg-rose-300 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-300`;
  return (
    <section class="text-center sm:text-left w-full">
      <Card
        heading={data.name}
        subHeading={data.title}
        from="rose-500"
        to="lime-500"
      >
        <h1 class="leading-normal mt-3 mb-4">{data.label}</h1>
        <a
          className={tw`inline-flex items-center mr-3 p-2 ${link}`}
          href={asset("/resume.pdf")}
          target="_blank"
        >
          <Icon url="download" class="w-7 h-7 mr-2" />
          CV
          <span class={tw`${linkUnderline}`} />
        </a>
      </Card>
    </section>
  );
}
