import { FC } from 'react';

const HomePage: FC = () => {
  const features = [
    { title: 'Fast', description: 'Lightning fast performance' },
    { title: 'Responsive', description: 'Looks great on any device' },
    { title: 'Modern', description: 'Built with modern tech stack' },
  ];

  return (
    <div className='font-sans text-gray-800'>
      {/* Hero Section */}
      <section className='flex h-screen flex-col items-center justify-center bg-blue-600 text-white'>
        <h1 className='mb-4 text-5xl font-bold'>Welcome to Our Product</h1>
        <p className='mb-8 max-w-xl text-center text-xl'>
          This is a simple React landing page built with Tailwind CSS.
        </p>
        <button className='rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-200'>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className='bg-gray-100 py-20'>
        <h2 className='mb-12 text-center text-4xl font-bold'>Features</h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {features.map((f, idx) => (
            <div key={idx} className='w-64 rounded-lg bg-white p-6 text-center shadow-lg'>
              <h3 className='mb-2 text-2xl font-semibold'>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 py-6 text-center text-white'>
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
