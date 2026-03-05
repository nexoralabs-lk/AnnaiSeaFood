import { useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { FadeInSection } from '../components/motion/FadeInSection'
import {
  productCategories,
  products,
  type ProductCategory,
} from '../data/products'

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>(
    'All',
  )

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="bg-slate-50">
      <PageHero
        title="Seafood products for demanding buyers."
        subtitle={
          <>
            A focused range of wild-caught crab, prawns, cephalopods, and tuna,
            produced to match technical specifications for Japanese, European, and
            Middle Eastern markets.
          </>
        }
      />

      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <FadeInSection>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Product Categories
                </p>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Filter by species group to review our core range. Detailed
                  technical sheets and private label options are available on
                  request.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category as ProductCategory | 'All')}
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex h-full flex-col overflow-hidden bg-white"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F7C82]">
                      {product.category}
                    </p>
                    <h3 className="font-heading text-base font-semibold tracking-tight text-slate-900">
                      {product.name}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                      {product.shortDescription}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-500">
                      {product.scientificName} • {product.origin}
                    </p>
                    <div className="mt-4 flex justify-between gap-3">
                      <Button
                        to={`/products/${product.slug}`}
                        variant="primary"
                        className="px-4 py-1.5 text-xs"
                      >
                        View details
                      </Button>
                      <Button
                        to="/contact"
                        variant="ghost"
                        className="px-3 py-1.5 text-[11px]"
                      >
                        Request quote
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>
    </div>
  )
}

