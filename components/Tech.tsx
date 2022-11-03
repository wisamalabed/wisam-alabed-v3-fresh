import { tw, apply } from "twind";
import { Card } from "@/components/Card.tsx";

export function Tech() {
  const link = apply`group relative text-rose-200 hover:text-rose-300`;
  const linkUnderline = apply`bg-rose-300 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-300`;
  return (
    <section class="snap-center snap-always h-full sm:h-full p-12">
      <Card
        heading="Tech"
        subHeading="How this site is built."
        image_url="cpu"
        from="violet-500"
        to="amber-500"
      >
        <p class="mb-4">
          This is a{" "}
          <a
            href="https://jamstack.org"
            target="_blank"
            className={tw`${link}`}
          >
            Jamstack
            <span class={tw`${linkUnderline}`} />
          </a>{" "}
          website created with{" "}
          <a
            href="https://fresh.deno.dev"
            target="_blank"
            className={tw`${link}`}
          >
            Fresh
            <span class={tw`${linkUnderline}`} />
          </a>
          , and{" "}
          <a href="https://twind.dev" target="_blank" className={tw`${link}`}>
            Twind
            <span class={tw`${linkUnderline}`} />
          </a>
          . It's all hosted on{" "}
          <a
            href="https://deno.com/deploy"
            target="_blank"
            className={tw`${link}`}
          >
            Deno
            <span class={tw`${linkUnderline}`} />
          </a>
          .
        </p>

        <p class="mb-4">
          My code editor of choice is{" "}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            className={tw`${link}`}
          >
            Visual Studio Code
            <span class={tw`${linkUnderline}`} />
          </a>
          .
        </p>

        <p class="mb-4">
          The source code and README for this site are on{" "}
          <a
            href="https://github.com/wisamalabed/wisam-alabed-v3-fresh"
            target="_blank"
            className={tw`${link}`}
          >
            GitHub
            <span class={tw`${linkUnderline}`} />
          </a>
          .
        </p>

        <p class="mb-8">
          Previous versions of the site were built with{" "}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            className={tw`${link}`}
          >
            Gatsby
            <span class={tw`${linkUnderline}`} />
          </a>
          ,{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            className={tw`${link}`}
          >
            Netlify
            <span class={tw`${linkUnderline}`} />
          </a>
          , and others.
        </p>
      </Card>
    </section>
  );
}
