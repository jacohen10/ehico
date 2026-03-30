import type { MDXComponents } from "mdx/types";
import Image from "next/image";

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
    ...components,
  };
}
