import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "fr",
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
