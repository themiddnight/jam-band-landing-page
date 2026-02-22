// Application URL
export const APP_URL = "https://collab-stg.up.railway.app/";

// Section items that will be in the dropdown
export const SECTION_MENU_ITEMS = [
  {
    label: 'Features',
    href: '/#features'
  },
  {
    label: 'Experience',
    href: '/#experience'
  },
  {
    label: 'Music Theory',
    href: '/#music-theory'
  },
  {
    label: 'Instruments',
    href: '/#instruments'
  },
  {
    label: 'Technical Requirements',
    href: '/#technical-requirements'
  }
] as const;

// Main navigation items
export const NAVIGATION_MENU_ITEMS = [
  {
    label: 'Sections',
    href: '#',
    hasDropdown: true,
    dropdownItems: SECTION_MENU_ITEMS
  },
  {
    label: 'About',
    href: '/about',
    hasDropdown: false
  },
  { label: 'Instructions',
    href: '/instructions',
    hasDropdown: false
  },
  {
    label: 'Feedback',
    href: '/feedback',
    hasDropdown: false
  }
] as const; 