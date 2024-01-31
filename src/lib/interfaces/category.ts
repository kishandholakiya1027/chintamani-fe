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
  id: string;
  srno?: string;
  location?: string;
  stock?: string;
  stone?: string | null;
  title: string;
  maintitle: string;
  price: string;
  rap?: string;
  rap_disccount?: string;
  per_ct?: string;
  disccount_price?: string | null;
  shape: string;
  carat: string;
  colour: string;
  clarity: string;
  cut?: string;
  polish: string;
  symmetry: string;
  flourescence: string;
  flourescence_Color?: string | null;
  measurements: string;
  cert_number: string;
  table: string;
  table_inclusion?: string;
  side_inclusion?: string;
  feather_inclusion?: string;
  tinge?: string;
  eyeclean?: string;
  girdle?: string;
  girdle_con?: string | null;
  girdle_per?: string;
  culet?: string;
  crown_height?: string;
  pavilian_depth?: string;
  depth: string;
  report: string;
  report_date: string;
  laser_inscription: string;
  lab: string;
  star_length?: string;
  lower?: string;
  crown_angle?: string;
  pavilian_angle?: string;
  diamond_certificate?: any;
  productvideo?: string | null;
  disccount_percentage?: string | null;
  productimage?: (string)[];
  customized?: boolean;
  status: number;
  diamond_size: DiamondSize;
  diamond_color: DiamondColor;
  diamond_clarity: DiamondClarity;
  diamond_cut: DiamondCut;
  createdAt: string;
  updatedAt: string;
  subcategoryid?: ProductTypeCategory ;
  categoryid: ProductTypeCategory;
  innercategoryid?: ProductTypeCategory;
}
export interface DiamondSize {
  size: string;
  size_desc: string;
  sizeimages: string;
}
export interface DiamondColor {
  color_desc: string;
  colorimage: string;
}
export interface DiamondClarity {
  clarity_desc: string;
  clarityimage: string;
}
export interface DiamondCut {
  cut_desc: string;
  cutimage: string;
}
export interface ProductTypeCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  status: number;
  createdAt: string;
  updatedAt: string;
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