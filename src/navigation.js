import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr'];
export const localePrefix = 'fr';

export const { Link, redirect, usePathname, useRouter } =
createSharedPathnamesNavigation({ locales, localePrefix });