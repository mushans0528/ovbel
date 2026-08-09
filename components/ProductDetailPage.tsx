import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductVisual } from "@/components/ProductVisual";
import { getLocalizedProductsByCategory, type Category, type Locale, type Product } from "@/lib/products";

const pageCopy = {
  en: {
    productCenter: "Product center",
    overview: "Overview",
    features: "Features",
    specifications: "Specifications",
    patterns: "Profile options",
    handling: "Handling & storage",
    applications: "Applications",
    applicationTitle: "Where this product works.",
    featureLabel: "Product engineering",
    featureFallback: "Built around the application.",
    technical: "Technical overview",
    specificationNote: "Reference values are reviewed against the conveyed material and operating conditions before quotation.",
    patternTitle: "Choose the surface around the material flow.",
    patternIntro: "Profile availability and dimensions are confirmed against the belt construction and application.",
    handlingTitle: "Protect the belt before installation.",
    handlingIntro: "General guidance from the source product information. Compound-specific instructions take precedence when supplied.",
    inquiryLabel: "Application review",
    inquiryTitle: "Specify the product around your system.",
    inquiryIntro: "Share the information you already have. We will identify the remaining details needed for quotation.",
    request: "Request a quote",
    ask: "Ask a technical question",
    send: "Send product requirements",
    related: "Related products",
    relatedTitle: "Continue through this product family.",
    viewCategory: "View category",
  },
  zh: {
    productCenter: "产品中心",
    overview: "产品概览",
    features: "产品特点",
    specifications: "技术参数",
    patterns: "花纹选择",
    handling: "运输与储存",
    applications: "应用场景",
    applicationTitle: "适用领域与工况。",
    featureLabel: "产品工程",
    featureFallback: "围绕实际应用设计。",
    technical: "技术概览",
    specificationNote: "参考数值将在报价前结合输送物料和工作条件审核确认。",
    patternTitle: "根据物料流动选择表面结构。",
    patternIntro: "具体可选花纹及尺寸需结合带体结构和应用要求确认。",
    handlingTitle: "安装前妥善保护输送带。",
    handlingIntro: "以下为原产品资料中的通用说明；如已提供具体胶料说明，应以该说明为准。",
    inquiryLabel: "应用审核",
    inquiryTitle: "围绕您的系统确认产品规格。",
    inquiryIntro: "请发送已有信息，我们将协助确认报价仍需补充的资料。",
    request: "获取报价",
    ask: "咨询技术问题",
    send: "发送产品需求",
    related: "相关产品",
    relatedTitle: "继续浏览同系列产品。",
    viewCategory: "查看产品分类",
  },
} as const;

export function ProductDetailPage({ product, category, locale }: { product: Product; category: Category; locale: Locale }) {
  const t = pageCopy[locale];
  const href = (path: string) => `/${locale}${path}`;
  const relatedProducts = getLocalizedProductsByCategory(category.slug, locale).filter((item) => item.slug !== product.slug).slice(0, 3);
  const heroSpecifications = product.slug === "chevron-conveyor-belt" ? product.specifications.slice(1, 4) : product.specifications.slice(0, 3);
  const productUrl = `https://ovbel.com/${locale}/products/${category.slug}/${product.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: category.name,
    brand: { "@type": "Brand", name: "OVBEL" },
    manufacturer: { "@type": "Organization", name: "Shandong Respower Industrial Co., Ltd." },
    url: productUrl,
    ...(product.media?.gallery.length ? { image: product.media.gallery.map((image) => `https://ovbel.com${image}`) } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <section className="product-hero product-hero-premium">
        <div className="shell">
          <div className="breadcrumbs">
            <Link href={href("/products")}>{t.productCenter}</Link><span>/</span>
            <Link href={href(`/products/${category.slug}`)}>{category.name}</Link><span>/</span>
            <strong>{product.name}</strong>
          </div>
          <div className="product-hero-grid">
            <div className="product-media-stage">
              {product.media?.gallery.length ? (
                <ProductGallery images={product.media.gallery} productName={product.name} locale={locale} />
              ) : (
                <ProductVisual category={category} label={product.eyebrow} productSlug={product.slug} />
              )}
              <div className="product-media-caption"><span>{category.index}</span><p>{category.name}</p></div>
            </div>
            <div className="product-summary">
              <p className="eyebrow">{product.eyebrow}</p>
              <h1>{product.name}</h1>
              <p className="lead">{product.summary}</p>
              <p>{product.description}</p>
              <div className="product-quick-specs">
                {heroSpecifications.map((specification) => <div key={specification.label}><span>{specification.label}</span><strong>{specification.value}</strong></div>)}
              </div>
              <div className="button-row">
                <Link className="button" href={href(`/request-quote?product=${product.slug}`)}>{t.request}</Link>
                <Link className="button button-outline" href={href("/contact")}>{t.ask}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="product-section-nav" aria-label={locale === "zh" ? "产品页章节" : "Product page sections"}>
        <div className="shell">
          <a href="#overview">{t.overview}</a>
          <a href="#features">{t.features}</a>
          <a href="#specifications">{t.specifications}</a>
          {product.patterns?.length ? <a href="#patterns">{t.patterns}</a> : null}
          {product.precautions?.length ? <a href="#handling">{t.handling}</a> : null}
        </div>
      </nav>

      <section className="section shell product-overview" id="overview">
        <div className="product-overview-copy">
          <p className="eyebrow">{t.applications}</p>
          <h2>{t.applicationTitle}</h2>
          <p>{product.applicationIntro ?? product.description}</p>
        </div>
        <div className="application-tags product-application-tags">
          {product.applications.map((application, index) => <span key={application}><b>{String(index + 1).padStart(2, "0")}</b>{application}</span>)}
        </div>
      </section>

      <section className="section section-gray" id="features">
        <div className="shell product-detail-grid">
          <div className="product-feature-panel">
            <p className="eyebrow">{t.featureLabel}</p>
            <h2>{product.featureHeading ?? t.featureFallback}</h2>
            <ul className="check-list product-feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </div>
          <div className="spec-card product-spec-card" id="specifications">
            <div className="spec-card-heading"><span>{category.index}</span><h2>{t.technical}</h2></div>
            <dl>{product.specifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>)}</dl>
            <p className="spec-note">{t.specificationNote}</p>
          </div>
        </div>
      </section>

      {product.patterns?.length ? (
        <section className="section shell product-patterns" id="patterns">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">{t.patterns}</p><h2>{t.patternTitle}</h2></div>
            <p>{t.patternIntro}</p>
          </div>
          <div className="pattern-grid">
            {product.patterns.map((pattern, index) => (
              <article key={pattern.name}>
                {product.media?.patternImages?.[index] ? (
                  <div className="pattern-image"><Image src={product.media.patternImages[index]} alt={`${product.name} — ${pattern.name}`} fill sizes="(max-width: 720px) 100vw, 33vw" /></div>
                ) : (
                  <div className={`pattern-swatch pattern-swatch-${(index % 6) + 1}`} aria-hidden="true"><i /><i /><i /></div>
                )}
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pattern.name}</h3>
                <p>{pattern.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {product.precautions?.length ? (
        <section className="section product-handling" id="handling">
          <div className="shell product-handling-grid">
            <div><p className="eyebrow eyebrow-light">{t.handling}</p><h2>{t.handlingTitle}</h2><p>{t.handlingIntro}</p></div>
            <ol>{product.precautions.map((precaution, index) => <li key={precaution}><span>{String(index + 1).padStart(2, "0")}</span><p>{precaution}</p></li>)}</ol>
          </div>
        </section>
      ) : null}

      <section className="section shell product-inquiry-plan">
        <div><p className="eyebrow">{t.inquiryLabel}</p><h2>{t.inquiryTitle}</h2><p>{t.inquiryIntro}</p></div>
        <div className="inquiry-checklist">
          {(product.inquiryChecklist ?? product.specifications.map((item) => item.label)).map((item) => <span key={item}>{item}</span>)}
        </div>
        <Link className="button" href={href(`/request-quote?product=${product.slug}`)}>{t.send} <ArrowIcon /></Link>
      </section>

      {relatedProducts.length ? (
        <section className="section section-gray">
          <div className="shell">
            <div className="section-heading split-heading"><div><p className="eyebrow">{t.related}</p><h2>{t.relatedTitle}</h2></div><Link className="text-link" href={href(`/products/${category.slug}`)}>{t.viewCategory} <ArrowIcon /></Link></div>
            <div className="product-grid product-grid-two">{relatedProducts.map((item) => <ProductCard product={item} locale={locale} key={item.slug} />)}</div>
          </div>
        </section>
      ) : null}
    </>
  );
}
