import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/layout/PageHero'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { FadeInSection } from '../components/motion/FadeInSection'
import { getProductBySlug } from '../data/products'

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) {
    return (
      <div className="bg-slate-50">
        <PageHero
          title="Product not found"
          subtitle="The product you are looking for may have been updated or is no longer available."
        />
        <section className="py-10 md:py-14">
          <Container>
            <p className="text-sm text-slate-600">
              Please return to the{' '}
              <Link to="/products" className="text-[#0B3C5D] underline">
                products overview
              </Link>{' '}
              page or contact our export team for the latest product list.
            </p>
          </Container>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-slate-50">
      <PageHero
        title={product.name}
        subtitle={
          <>
            {product.shortDescription} Detailed specifications and typical packing
            formats for program-based buyers.
          </>
        }
      />

      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <FadeInSection>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover md:h-80"
                    loading="lazy"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={product.image}
                        alt={`${product.name} detail ${index}`}
                        className="h-24 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Scientific Name:
                    </span>{' '}
                    {product.scientificName}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Origin:</span>{' '}
                    {product.origin}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Product Category:
                    </span>{' '}
                    {product.category}
                  </p>
                </div>

                <dl className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Available Sizes
                    </dt>
                    <dd className="mt-2 text-slate-800">
                      {product.availableSizes.join(' • ')}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Freezing Method
                    </dt>
                    <dd className="mt-2 text-slate-800">{product.freezingMethod}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Packaging
                    </dt>
                    <dd className="mt-2 text-slate-800">{product.packaging}</dd>
                  </div>
                </dl>

                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    Tailored specifications — including glazing percentage, cut-style,
                    and labeling — can be developed for program-based customers.
                  </p>
                  <p>
                    A detailed technical data sheet and sample photos are available on
                    request from our export team.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    to={{
                      pathname: '/contact',
                      search: `?product=${encodeURIComponent(product.name)}`,
                    }}
                  >
                    Request Quote
                  </Button>
                  <Button
                    to="/products"
                    variant="secondary"
                  >
                    Back to products
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>
    </div>
  )
}

