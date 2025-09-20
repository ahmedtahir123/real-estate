import { getSheetData } from '@/lib/getSheetData';

export default async function SheetDataPage() {
  const data = await getSheetData();

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Google Sheet Data</h1>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
