import { useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { Container } from '../components/layout/Container'
import { FadeInSection } from '../components/motion/FadeInSection'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from '../data/gallery'

type ActiveCategory = GalleryCategory | 'All'

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('All')
  const [activeId, setActiveId] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const activeItem = activeId
    ? galleryItems.find((item) => item.id === activeId) ?? null
    : null

  return (
    <div className="bg-slate-50">
      <PageHero
        title="Inside the Annai Sea Food supply chain."
        subtitle="A look at fishing grounds, processing lines, products, packaging, and cold storage that support our export programs."
      />

      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <FadeInSection>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Gallery Categories
                </p>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Browse images from our fishing operations, processing facility,
                  product portfolio, and export infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category as ActiveCategory)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      activeCategory === category
                        ? 'bg-[#0B3C5D] text-white shadow-sm'
                        : 'bg-white text-slate-700 shadow-sm hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-8">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="mb-4 block w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ breakInside: 'avoid' }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                  <div className="px-4 py-3 text-xs text-slate-700">
                    <p className="font-semibold">{item.category}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{item.alt}</p>
                  </div>
                </button>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="absolute inset-0 h-full w-full cursor-pointer"
            aria-label="Close image"
          />
          <div className="relative z-10 max-h-full max-w-3xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="flex items-center justify-between gap-4 px-5 py-3 text-xs text-slate-200">
              <div>
                <p className="font-semibold">{activeItem.category}</p>
                <p className="mt-1 text-[11px] text-slate-400">{activeItem.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-full border border-slate-500 px-3 py-1 text-[11px] font-medium text-slate-100 hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

