import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    hero: z.object({
      badge: z.string().optional(),
      title: z.string(),
      highlightTitle: z.string().optional(),
      subtitle: z.string(),
      primaryCta: z.object({
        text: z.string(),
        href: z.string(),
      }),
      secondaryCta: z.object({
        text: z.string(),
        href: z.string(),
      }).optional(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    }),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
      description: z.string().optional(),
    })).optional(),
    featuresHeading: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
    }).optional(),
    features: z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      badge: z.string().optional(),
      metrics: z.string().optional(),
    })).optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
      company: z.string(),
      avatar: z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    }).optional(),
    ctaBanner: z.object({
      title: z.string(),
      subtitle: z.string(),
      buttonText: z.string(),
      buttonHref: z.string(),
    }).optional(),
  }),
});

const pricingCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pricing' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    tagline: z.string(),
    priceMonthly: z.number(),
    priceAnnual: z.number(),
    currency: z.string().default('$'),
    popular: z.boolean().default(false),
    ctaText: z.string(),
    ctaHref: z.string(),
    features: z.array(z.object({
      name: z.string(),
      included: z.boolean(),
      tooltip: z.string().optional(),
    })),
  }),
});

const faqsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
    category: z.string().default('General'),
    featured: z.boolean().default(true),
  }),
});

export const collections = {
  pages: pagesCollection,
  pricing: pricingCollection,
  faqs: faqsCollection,
};
