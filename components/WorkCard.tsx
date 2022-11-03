import { Work } from "@/utils/resume.ts";

export function WorkCard(props: { work: Work }) {
  const { work } = props;
  return (
    <div class="flex flex-col flex-wrap gap-2 py-4">
      <span class="font-extralight text-xs text-gray-200 sm:self-end  invisible sm:visible">
        {work.startDate} - {work.endDate}
      </span>
      <a
        class="font-extrabold text-rose-500 inline-flex gap-2"
        href={work.website}
        target="_blank"
      >
        {work.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-external-link w-4 h-4 self-center"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <p class="font-semibold font-mono">{work.position}</p>
      <span class="font-extralight text-xs text-gray-200 sm:invisible visible">
        {work.startDate} - {work.endDate}
      </span>
      <div class="space-y-2">
        <p class="text-sm md:text-base">{work.summary}</p>
        <ul class="list-disc list-inside space-y-2">
          {work.highlights.map((highlight) => (
            <li class="text-xs ml-4 md:text-sm">{highlight}</li>
          ))}
        </ul>
      </div>
      <hr class="border-rose-500 border-b-2 border-dotted mt-4 w-3/4 self-center " />
    </div>
  );
}
