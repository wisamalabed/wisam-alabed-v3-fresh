import { ComponentChildren } from "preact";
import { Icon } from "@/components/Icon.tsx";

export function Card(props: {
  heading: string;
  subHeading: string;
  image_url?: string;
  from: string;
  to: string;
  children: ComponentChildren;
}) {
  const { heading, subHeading, image_url, children } = props;
  return (
    <div
      class={`lg:w-4/6 mx-auto rounded-xl p-0.5  bg-gradient-to-r from-${props.from} to-${props.to}  transition-transform hover:scale-105 content-center`}
    >
      <div
        class={`flex flex-col sm:flex-row bg-white dark:(bg-gray-900 text-white) p-2 rounded-lg transition duration-500`}
      >
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 py-4">
          <div class="w-28 h-28 rounded-full inline-flex items-center justify-center">
            <Icon url={image_url} class="w-28 h-28 dark:text-rose-500" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-bold mt-4 text-3xl ">{heading}</h2>
            <div class="w-12 h-1 rounded mt-2 mb-4"></div>
            <p class="font-mono dark:text-rose-300">{subHeading}</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:px-8 px-4 sm:py-8 py-4 mt-4 pt-4 sm:mt-0 self-center">
          {children}
        </div>
      </div>
    </div>
  );
}
