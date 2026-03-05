export type ProductCategory =
  | 'Squid'
  | 'Prawns'
  | 'Crabs'
  | 'Lobster'
  | 'Cuttle Fish'
  | 'Fish'
  | 'Frozen Food'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  image: string
  scientificName: string
  origin: string
  availableSizes: string[]
  freezingMethod: string
  packaging: string
}

export const productCategories: (ProductCategory | 'All')[] = [
  'All',
  'Squid',
  'Prawns',
  'Crabs',
  'Lobster',
  'Cuttle Fish',
  'Fish',
  'Frozen Food',
]

export const products: Product[] = [
  {
    id: 'blue-swimming-crab',
    slug: 'blue-swimming-crab',
    name: 'Blue Swimming Crab',
    category: 'Crabs',
    shortDescription:
      'Wild-caught blue swimming crab, processed and frozen at sea for optimal freshness.',
    image:
      'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Portunus pelagicus',
    origin: "Northern coastal waters of Sri Lanka's Palk Bay",
    availableSizes: ['200–300 g', '300–500 g'],
    freezingMethod: 'IQF (Individually Quick Frozen)',
    packaging: '10 kg master cartons, 1 kg inner poly packs',
  },
  {
    id: 'tiger-prawns',
    slug: 'tiger-prawns',
    name: 'Tiger Prawns',
    category: 'Prawns',
    shortDescription:
      'Premium black tiger prawns with firm texture and consistent sizing for high-end buyers.',
    image:
      'https://images.pexels.com/photos/5409003/pexels-photo-5409003.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Penaeus monodon',
    origin: 'Sri Lankan coastal fisheries and approved farms',
    availableSizes: ['16/20', '21/25', '26/30', '31/40'],
    freezingMethod: 'Block frozen / IQF',
    packaging: '10 x 1 kg or 5 x 2 kg cartons',
  },
  {
    id: 'whole-squid',
    slug: 'whole-squid',
    name: 'Whole Squid',
    category: 'Squid',
    shortDescription:
      'Cleaned whole squid with bright white meat, ideal for grilling and frying applications.',
    image:
      'https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Loligo duvauceli',
    origin: 'Indian Ocean, FAO Area 51',
    availableSizes: ['U/5', '5/10', '10/20'],
    freezingMethod: 'IQF tunnel freezing',
    packaging: 'Bulk 10 kg cartons, custom private label options',
  },
  {
    id: 'cuttlefish',
    slug: 'cuttlefish',
    name: 'Cuttlefish',
    category: 'Cuttle Fish',
    shortDescription:
      'Premium cleaned cuttlefish with uniform sizing, popular for Japanese and European markets.',
    image:
      'https://images.pexels.com/photos/3296274/pexels-photo-3296274.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Sepia pharaonis',
    origin: 'Offshore Sri Lankan waters',
    availableSizes: ['100–200 g', '200–400 g'],
    freezingMethod: 'IQF plate freezing',
    packaging: '10 kg master cartons, vacuum-packed',
  },
  {
    id: 'rock-lobster',
    slug: 'rock-lobster',
    name: 'Rock Lobster',
    category: 'Lobster',
    shortDescription:
      'Wild-caught rock lobsters, carefully graded and blast frozen for premium restaurants.',
    image:
      'https://images.pexels.com/photos/5409024/pexels-photo-5409024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Panulirus homarus',
    origin: 'Rocky coastal regions of Sri Lanka',
    availableSizes: ['300–400 g', '400–600 g', '600+ g'],
    freezingMethod: 'Blast frozen',
    packaging: 'Styrofoam with gel packs in export cartons',
  },
  {
    id: 'yellowfin-tuna',
    slug: 'yellowfin-tuna',
    name: 'Yellowfin Tuna Loins',
    category: 'Fish',
    shortDescription:
      'Sashimi-grade yellowfin tuna loins, processed under strict cold-chain control.',
    image:
      'https://images.pexels.com/photos/3738179/pexels-photo-3738179.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Thunnus albacares',
    origin: 'Deep sea Sri Lankan longline vessels',
    availableSizes: ['3–5 kg', '5–7 kg'],
    freezingMethod: '-40°C blast frozen',
    packaging: 'Vacuum-packed loins in 20 kg cartons',
  },
  {
    id: 'frozen-seafood-mix',
    slug: 'frozen-seafood-mix',
    name: 'Frozen Seafood Mix',
    category: 'Frozen Food',
    shortDescription:
      'Premium frozen seafood combinations for retail and foodservice — quality-controlled and ready for global distribution.',
    image:
      'https://images.pexels.com/photos/3738117/pexels-photo-3738117.jpeg?auto=compress&cs=tinysrgb&w=1200',
    scientificName: 'Various',
    origin: 'Sri Lankan waters, Annai supply chain',
    availableSizes: ['1 kg', '2.5 kg', '5 kg', '10 kg'],
    freezingMethod: 'IQF / block frozen',
    packaging: 'Retail pouches and bulk cartons, private label available',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

