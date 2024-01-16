export interface Category {
  id: string;
  description: string;
  name: string;
  status: number;
  subCategories: [];
  createdAt: string;
  updatedAt: string;
}

export interface subCategory {
  id: string;
  description: string;
  name: string;
  status: number;
  image?: any
  innerCategories?: [];
  createdAt: string;
  updatedAt: string;
}


export interface breadCrumbType {
  id: string;
  name: string;
  path: string;

}


export interface diamondProperty {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface productType {
  id?: string;
  price?: string;
  title?: string;
  createdAt?: string;
  updatedAt?: string;
  productimage?: string[];
  maintitle?: string;
  shape?: string;
  carat?: string;
  colour?: string;
  clarity?: string;
  cut?: string;
  polish?: string;
  symmetry?: string;
  flourescence?: string;
  measurements?: string;
  cert_number?: string;
  table?: string;
  crown_height?: string;
  pavilian_depth?: string;
  depth?: string;
  crown_angle?: string;
  pavilian_angle?: string;
  diamond_size?: diamond_size;
  diamond_clarity?: diamond_clarity;
  diamond_color?: diamond_color;
  diamond_cut?: diamond_cut;
}

interface diamond_size {
  size_desc?:string;
  sizeimages?:string;
  
}
interface diamond_clarity {
  clarity_desc?:string;
  clarityimage?:string;
  
  
}
interface diamond_color {
  color_desc?:string;
  colorimage?:string;
  
}
interface diamond_cut {
  diamond_cut?:string;
  cutimage?:string;
  
}


export interface shapeType {
  id: string;
  name: string;
  description: string;
  image: string;
  updatedAt: string;
}


export interface blogType {
  id?: string;
  title?: string;
  author?:{
    firstname:string
    lastname:string
  };
  heading?: string;
  description?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  
}

export interface bannerType {
  image?: string;
  title?: string;
  description?: string;
}