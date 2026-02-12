export interface Project {
  id: string;
  name: string;
  category: string;
  status: string;
  area: string;
  image: string;
  stats?: {
    area: string;
    apartments?: string;
    parking?: string;
  };
  description?: string;
}

export interface Service {
  name: string;
  number: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
