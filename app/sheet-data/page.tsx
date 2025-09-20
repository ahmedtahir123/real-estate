import { getSheetData } from '@/lib/getSheetData';

export default async function SheetDataPage() {
  const data = await getSheetData();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Google Sheet Data</h1>
      <p className="mb-4 text-gray-600">This page displays the raw data fetched from your connected Google Sheet. This can be useful for debugging.</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
