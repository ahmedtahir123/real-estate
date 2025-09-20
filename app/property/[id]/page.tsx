// This file will be a server component
import { getPropertyById, getAllPropertyIds } from '@/lib/propertyData';
import PropertyDetailClient from '@/components/PropertyDetailClient';

// This function tells Next.js which pages to generate at build time
export async function generateStaticParams() {
  const propertyIds = await getAllPropertyIds();

  
  // Return an array of objects, each with the `id` parameter
  return propertyIds.map(id => ({
    id: id,
  }));
}

// This is your main page component, now a server component
export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Property not found</p>
      </div>
    );
  }

  // Pass the fetched data to the client component
  return <PropertyDetailClient property={property} />;
}