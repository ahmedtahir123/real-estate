// This file will be a server component
import BeforeAfterClient from '@/components/Before&AfterClient';
import { getAllPropertyIds, getBeforeAfterProperties } from '@/lib/propertyData';

// This is your main page component, now a server component
export default async function BeforeAfter() {
  const property = await getBeforeAfterProperties();

  // Pass the fetched data to the client component
  return <BeforeAfterClient property={property} />;
}