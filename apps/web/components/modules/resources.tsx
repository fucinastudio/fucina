import React from "react";
import Link from "next/link";

import { Button } from "@fucina/ui";
import EmptyRaw from "@/components/modules/resources-blocks/empty-raw";
import Title from "@/components/modules/resources-blocks/title";
import { DoubleCard, SingleCard } from "@/components/modules/resources-blocks/cards";
import { FirstIllustration, SecondIllustration, ThirdIllustration } from "@/components/illustrations";
import WithButton from "@/components/modules/resources-blocks/with-button";
import { GithubIcon } from "@/components/social-icons";

export default function Resources() {
  return (
    <section id="resources" className="border-grid w-screen border-t">
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Lightning-fast</span> solutions
          </>
        }
        description="Speed up your workflow with our products."
      />
      <SingleCard
        title="Feely"
        description="User feedbacks get real by being rewarded"
        illustration={<FirstIllustration />}
        href="https://feely.so"
      />
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Build faster</span> with our toolkit
          </>
        }
        description="Leverage our resources to accelerate your product development."
      />
      <DoubleCard
        firstTitle="Design system"
        firstDescription="The place where we forge creativity and consistency in a legacy of exceptional user experiences"
        firstIllustration={<SecondIllustration />}
        firstHref="https://www.design.fucina.studio/"
        secondTitle="Storybook"
        secondDescription="Build UIs without the grunt work"
        secondIllustration={<ThirdIllustration />}
        secondHref="https://www.stories.fucina.studio/?path=%2Fdocs%2Fwelcome--documentation"
      />
      <EmptyRaw />
      <WithButton
        title={
          <>
            Proudly <span className="brand-gradient">open source</span>
          </>
        }
        description="Fucina is not greedy, and neither of us is: we keep this tool entirely open source. "
        button={
          <Button asChild variant="secondary" className="w-full sm:w-fit">
            <Link
              target="blank"
              href="https://github.com/fucinastudio/website-template"
              className="flex items-center gap-2">
              <GithubIcon />
              Github
            </Link>
          </Button>
        }
      />
      <EmptyRaw />
    </section>
  );
}
