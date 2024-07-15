import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import React from "react";

const Content = () => {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <Typography variant="h3">Curious about me? Here you have it:</Typography>
      <Typography>
        I&apos;m a passionate,{" "}
        <Link
          noCustomization
          externalLink
          withUnderline
          href={EXTERNAL_LINKS.FIGMA}
        >
          self-proclaimed designer
        </Link>{" "}
        who specializes in full stack development (React.js & Node.js). I am
        enthusiastic about bringing the technical and visual aspects of digital
        products to life. User experience, pixel perfect design, and writing
        clear, readable, highly performant code matters to me.
      </Typography>
      <Typography>
        I began my journey as a web developer in 2022, and since then, I&apos;ve
        continued to grow and evolve as a developer, taking on new challenges
        and learning the latest technologies along the way.
      </Typography>
      <Typography>
        I am very much a progressive thinker and enjoy working on products end
        to end, from ideation all the way to development.
      </Typography>
      <Typography>
        I share tech-related bites and build in public, or you can follow
        me on{" "}
        <Link
          noCustomization
          externalLink
          withUnderline
          href={EXTERNAL_LINKS.GITHUB}
        >
          GitHub
        </Link>
        .
      </Typography>
      <Typography>Finally, some quick bits about me.</Typography>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6">
        <ul className="flex list-inside list-disc flex-col gap-2">
          <Typography component="li">Student of FPT University</Typography>
          <Typography component="li">Full time freelancer</Typography>
        </ul>
        <ul className="flex list-inside list-disc flex-col gap-2">
          <Typography component="li">Avid learner</Typography>
          <Typography component="li">Calisthenics lover</Typography>
        </ul>
      </div>
      <Typography>
        One last thing, I&apos;m available for freelance work, so feel free to
        reach out and say hello! I promise I don&apos;t bite 😉
      </Typography>
    </div>
  );
};

export default Content;
