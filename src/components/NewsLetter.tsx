import React, { useState } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('https://grantty-backend-fltj.onrender.com/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail(''); // clear input
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Subscription error:', error);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 md:px-14 xl:px-12">
      <div className="bg-[#1D1D1D] px-6 py-8 md:px-12 lg:px-14 rounded-3xl text-white">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="font-bold text-2xl md:text-3xl text-center lg:text-left">Newsletter</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border p-3 md:p-4 border-[#D2D2D2] rounded-lg w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#6CBB2D] text-white px-6 py-3 md:py-4 rounded-lg w-full sm:w-auto whitespace-nowrap hover:bg-[#5BA71E] transition-colors"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center lg:text-left text-sm md:text-base text-[#D2D2D2]">
            Get the latest update on what's
            <br className="hidden sm:block lg:hidden" /> going on directly to your inbox.
          </p>
        </div>

        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

export default NewsLetter;
