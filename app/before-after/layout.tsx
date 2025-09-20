import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After Transformations - Property Xchange | Renovation Showcase',
  description: 'Witness incredible property transformations by Property Xchange. See our renovation projects with before and after comparisons of stunning home makeovers.',
  keywords: [
    'before after renovations',
    'property transformations',
    'Property Xchange renovations',
    'home renovations',
    'property makeovers',
    'renovation showcase',
    'home improvement'
  ],
  openGraph: {
    title: 'Before & After Transformations - Property Xchange | Renovation Showcase',
    description: 'Witness incredible property transformations with our before and after renovation showcase.',
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        width: 1200,
        height: 630,
        alt: 'Property Renovations Before & After - Property Xchange',
      },
    ],
  },
};

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}