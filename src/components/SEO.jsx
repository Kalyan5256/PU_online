import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title = "Parul University Online Programs 2026-27 | UGC Approved Degrees",
    description = "Parul University Online offers UGC-entitled UG, PG, Diploma & PG Diploma programs. NAAC A++ accredited. Flexible online learning with EMI options. Apply now for 2026-27.",
    keywords = "Parul University Online, online degree, UGC entitled, NAAC A++, BBA online, MBA online, MCA online, Digital Marketing diploma, online education India, distance learning, Parul University fees, online programs 2026",
    canonical = "https://pu-online.vercel.app/",
    ogImage = "https://pu-online.vercel.app/images/mba_reason.webp",
    ogType = "website",
    noindex = false,
    schema = null
}) {
    // Default Schema.org EducationalOrganization structured data
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Parul University Online",
        "alternateName": "Parul University",
        "url": canonical,
        "logo": "https://pu-online.vercel.app/images/logoblackn.webp",
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "India",
            "addressRegion": "Gujarat",
            "addressLocality": "Vadodara"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "1200"
        }
    };

    const structuredData = schema || defaultSchema;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Robots / Crawling Directive */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Parul University Online" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@ParulUniversity" />
            <meta name="twitter:creator" content="@ParulUniversity" />

            {/* Structured Data (JSON-LD) for Search Engines */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
