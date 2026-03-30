import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { InlineCTA } from "@/components/marketing/inline-cta";
import { TableOfContents } from "@/components/marketing/table-of-contents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        width={800}
        height={450}
        className="rounded-lg"
        {...(props as React.ComponentProps<typeof Image>)}
        alt={props.alt || ""}
      />
    ),
    InlineCTA,
    TableOfContents,
    ...components,
  };
}
