import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type Props = {
  buttonLink: LinkField;
  className?: string;
};

export default function Button({ buttonLink, className }: Props) {
  return (
    <PrismicNextLink
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
      field={buttonLink}
    />
  );
}
