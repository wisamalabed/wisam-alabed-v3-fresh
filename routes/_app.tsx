import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" sizes="64x64" href="favicon.ico" />
        <title>Wisam Al Abed's Personal Site</title>
        <meta
          name="description"
          content="Personal site of a quirky software engineer."
        />
        <meta property="og:url" content="https://wisamalabed.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wisam Al Abed" />
        <meta
          property="og:description"
          content="Personal site of a quirky software engineer."
        />
        <meta
          property="og:image"
          content="https://wisamalabed.deno.dev/avatar.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wisamalabed.deno.dev" />
        <meta property="twitter:url" content="https://wisamalabed.deno.dev/" />
        <meta name="twitter:title" content="Wisam Al Abed" />
        <meta
          name="twitter:description"
          content="Personal site of a quirky software engineer."
        />
        <meta
          name="twitter:image"
          content="https://wisamalabed.deno.dev/avatar.jpeg"
        />
      </Head>
      <Component />
    </>
  );
}
