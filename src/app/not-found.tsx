import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This page isn't here."
      subtitle="The link may be outdated. You can head home, browse industries, or request a free demo."
    >
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/industries" variant="outlineLight">
          Browse industries
        </ButtonLink>
      </div>
    </PageHero>
  );
}
