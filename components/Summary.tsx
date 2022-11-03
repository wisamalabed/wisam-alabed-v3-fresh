import { asset } from "$fresh/runtime.ts";
import { Basic } from "@/utils/resume.ts";
import { tw, apply } from "twind";
import { Card } from "@/components/Card.tsx";
import { Icon } from "./Icon.tsx";

export function Summary(props: { data: Basic }) {
  const { data } = props;
  const link = apply`relative group text-rose-200 hover:text-rose-300`;
  const linkUnderline = apply`bg-rose-300 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-300`;
  return (
    <section class="snap-center snap-always h-screen sm:h-full p-12 text-center sm:text-left">
      <Card
        heading={data.name}
        subHeading={data.title}
        from="rose-500"
        to="lime-500"
      >
        <p class="leading-normal mt-3 mb-4">{data.label}</p>
        <a
          className={tw`inline-flex items-center mr-3 p-2 ${link}`}
          href={asset("/resume.pdf")}
          target="_blank"
        >
          <Icon url="download" class="w-7 h-7 mr-2" />
          Resume
          <span class={tw`${linkUnderline}`} />
        </a>
      </Card>
    </section>
  );
}
