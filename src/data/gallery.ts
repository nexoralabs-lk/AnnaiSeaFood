export type GalleryCategory =
  | 'Fishing'
  | 'Processing'
  | 'Products'
  | 'Packaging'
  | 'Cold Storage'

export interface GalleryItem {
  id: string
  category: GalleryCategory
  src: string
  alt: string
}

export const galleryCategories: (GalleryCategory | 'All')[] = [
  'All',
  'Fishing',
  'Processing',
  'Products',
  'Packaging',
  'Cold Storage',
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'fishing-boat-sunrise',
    category: 'Fishing',
    src: 'https://images.pexels.com/photos/2403409/pexels-photo-2403409.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fishing boats at sunrise on the ocean',
  },
  {
    id: 'longline-vessel',
    category: 'Fishing',
    src: 'https://images.pexels.com/photos/4615936/pexels-photo-4615936.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Crew working on a longline fishing vessel',
  },
  {
    id: 'processing-line',
    category: 'Processing',
    src: 'https://images.pexels.com/photos/3738094/pexels-photo-3738094.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Workers on a seafood processing line wearing protective gear',
  },
  {
    id: 'inspection',
    category: 'Processing',
    src: 'https://images.pexels.com/photos/5217697/pexels-photo-5217697.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Quality control inspection of seafood products',
  },
  {
    id: 'crab-display',
    category: 'Products',
    src: 'https://images.pexels.com/photos/10269890/pexels-photo-10269890.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fresh crabs on ice display',
  },
  {
    id: 'lobster-closeup',
    category: 'Products',
    src: 'https://images.pexels.com/photos/5928049/pexels-photo-5928049.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Closeup of a rock lobster on ice',
  },
  {
    id: 'vacuum-packaging',
    category: 'Packaging',
    src: 'https://images.pexels.com/photos/3738117/pexels-photo-3738117.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Vacuum-packed seafood portions on a conveyor',
  },
  {
    id: 'export-cartons',
    category: 'Packaging',
    src: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Stacked export cartons ready for loading',
  },
  {
    id: 'cold-storage',
    category: 'Cold Storage',
    src: 'https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Worker in a cold storage facility with pallets of frozen goods',
  },
  {
    id: 'cold-room',
    category: 'Cold Storage',
    src: 'https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Interior of a modern cold room with shelving',
  },
]

