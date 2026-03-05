import { Container } from '../layout/Container'
import { SectionHeading } from '../typography/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeInSection } from '../motion/FadeInSection'
import { products } from '../../data/products'

export function ProductCategoriesSection() {
  const featured = products

  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-10">
          <FadeInSection>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Products"
                title="Focused portfolio for discerning buyers."
                description="A curated range of wild-caught and farm-supported products with consistent specifications for Japanese, European, and Middle Eastern markets."
              />
              <Button
                to="/products"
                variant="secondary"
                className="self-start md:self-end"
              >
                View full product list
              </Button>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <Card key={product.id} className="flex h-full flex-col overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
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
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                      <span>{product.scientificName}</span>
                      <span>{product.origin}</span>
                    </div>
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
        </div>
      </Container>
    </section>
  )
}

