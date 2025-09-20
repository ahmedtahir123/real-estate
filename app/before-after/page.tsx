// This file will be a server component
import BeforeAfterClient from '@/components/BeforeAfterClient';
import { getBeforeAfterProperties } from '@/lib/propertyData';

// This is your main page component, now a server component
export default async function BeforeAfter() {
  const properties = await getBeforeAfterProperties();

  // Pass the fetched data to the client component
  return <BeforeAfterClient properties={properties} />;
}
