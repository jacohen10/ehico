import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTABanner({
  heading = "Ready to Get Started?",
  subheading = "Request a free quote today. We'll get back to you within one business day.",
  buttonText = "Get a Free Quote",
  buttonHref = "/contact",
}: {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-primary-900">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-200">
            {subheading}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="accent" size="lg" href={buttonHref}>
              {buttonText}
            </Button>
            <Button variant="outline-white" size="lg" href="tel:+17576400243">
              Call (757) 640-0243
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
