export interface NavLink {
  id: number;
  url: string;
  label: string;
  subLinks?: { label: string; url: string }[];
}

// constants/navigation.ts
export const navlinks: NavLink[] = [
  { 
    id: 1,
    url: '/#home',  // Now includes both path and anchor
    label: 'Home',
  },
  { 
    id: 2,
    url: '/#packages',
    label: 'Packages',
  }, 
  { 
    id: 3,
    url: '/about',
    label: 'About',
  }, 
  { 
    id: 4,
    url: '/#contact',
    label: 'Contact',
  },
];