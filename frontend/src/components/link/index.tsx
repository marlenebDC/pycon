/** @jsx jsx */
import { Box, Link as ThemeLink } from "@theme-ui/components";
import { Link as GatsbyLink } from "gatsby";
import { jsx } from "theme-ui";

import { useCurrentLanguage } from "../../context/language";
import { useHover } from "../../helpers/use-hover";
import { GoogleIcon } from "../icons/google";

type LinkProps = {
  href: string | null;
  variant?: string;
  target?: string;
  backgroundColor?: string;
};

const ArrowRightBackground = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      height: 50,
      width: "calc(100% + 25px)",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "-3px",
        left: 0,
        right: 24,
        borderTop: "primary",
        borderBottom: "primary",
        borderLeft: "primary",
        height: 50,
        backgroundColor,
      }}
    />
    <svg
      viewBox="2 0 32 66"
      preserveAspectRatio="none"
      vectorEffect="non-scaling-stroke"
      sx={{
        position: "absolute",
        top: "-3px",
        height: 50,
        right: 0,
      }}
    >
      <path d="M1 0V66L30 33L1 0Z" stroke="black" strokeWidth="3" />
      <path d="M0 2.5L27.5 33L0 63.5V2.5Z" sx={{ fill: backgroundColor }} />
    </svg>
  </Box>
);

const isExternalLink = ({ href, target }: { href: string; target?: string }) =>
  href.startsWith("http") || href.startsWith("mailto") || target === "_blank";

export const Link: React.SFC<LinkProps> = ({
  children,
  href,
  backgroundColor,
  ...additionalProps
}) => {
  const language = useCurrentLanguage();

  if (href) {
    href = href.replace(":language", language);
  }

  const isExternal =
    (href && isExternalLink({ href, ...additionalProps })) ||
    additionalProps.variant === "google";

  const LinkComponent = isExternal
    ? ThemeLink
    : ({ ...props }: { to: string }) => (
        <GatsbyLink activeClassName="active" {...props} />
      );

  if (additionalProps.target === "_blank") {
    (additionalProps as any).rel = "noopener noreferrer";
  }

  const component = (hovered: boolean) => (
    <ThemeLink {...additionalProps} as={LinkComponent} href={href} to={href}>
      {additionalProps.variant === "button" && (
        <ArrowRightBackground
          backgroundColor={hovered ? "orange" : backgroundColor || "yellow"}
        />
      )}

      {additionalProps.variant === "google" && <GoogleIcon />}

      <Box as="span" sx={{ position: "relative", zIndex: 10 }}>
        {children}
      </Box>
    </ThemeLink>
  );

  const [hoverable, _] = useHover(component);

  return hoverable;
};
