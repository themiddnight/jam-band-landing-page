// Section items that will be in the dropdown
export const SECTION_MENU_ITEMS = [
  {
    label: 'Features',
    href: '/#features'
  },
  {
    label: 'Instruments',
    href: '/#instruments'
  },
  {
    label: 'Perfect For',
    href: '/#perfect-for'
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
    label: 'Feedback',
    href: '/feedback',
    hasDropdown: false
  }
] as const; 