import Head from 'next/head';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing App</h1>
        <Card title="Sample Property" description="This is a placeholder listing." />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Booked!')} />
        </div>
      </main>
    </>
  );
}
