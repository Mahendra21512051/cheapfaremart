import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dummy blog data
const blogData = [
  {
    id: 1,
    title: 'Best Places To Visit In Switzerland',
    image: '/images/group-travel.jpg',
    imgtitle: 'Best Travel Places',
    date: 'Aug 30 2024',
    description:
      'Switzerland amuses travelers from across the world. Here is the list of best places to visit in Switzerland.',
  },
  {
    id: 2,
    title: 'Things To Do In Lake Tahoe',
    image: '/images/blog2.jpg',
    imgtitle: '',
    date: '',
    description:
      'Are you planning to visit Lake Tahoe? Add the following things to do to your Lake Tahoe vacation plan.',
  },
  {
    id: 3,
    title: 'Best Travel Apps to Plan Your Trip',
    image: '/images/blog3.jpg',
    imgtitle: '',
    date: '',
    description:
      'Use these top-rated apps to organize and simplify your next vacation.',
  },
  {
    id: 4,
    title: 'Travel Insurance Explained',
    image: '/images/blog4.jpg',
    imgtitle: '',
    date: '',
    description:
      'Understand the importance of travel insurance and what it covers.',
  },
];

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set dummy data on component mount
    setData(blogData);
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <div className='flex font-family text-[14px] gap-1 p-2 bg-slate-100 items-center'>
        <h1 className='flex gap-2'>
          Cheapfaremart <FaAngleRight size={20} className='text-gray-400' />
        </h1>
        <p className='text-[#f60]'>Blogs</p>
      </div>

      {/* Heading */}
      <h1 className='fontstyle1 text-[24px] px-5 pt-4'>Trending Blogs</h1>

      {/* Blog Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-4'>
        {data.map((blog) => (
          <div
            key={blog.id}
            className='bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col'
          >
            {/* Image as Background */}
            <div
              className='h-48 w-full bg-cover bg-center relative rounded-t-lg overflow-hidden'
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className='absolute bottom-0 w-full flex justify-between px-3 py-2  text-[13px]'>
                <p className='text-white font-medium font-family bg-black opacity-50 px-4 py-1 rounded'>
                  {blog.imgtitle || 'Travel Blog'}
                </p>
                <p className='text-white font-medium font-family  bg-black opacity-50 px-4 py-1 rounded'>
                  {blog.date || 'Unknown Date'}
                </p>
              </div>
            </div>

            {/* Blog Content */}
            <div className='p-4 flex flex-col flex-grow'>
              <h2 className='text-lg font-semibold text-[#20595e] mb-2'>
                {blog.title}
              </h2>
              <p className='text-sm text-gray-600 flex-grow'>{blog.description}</p>

              {/* Read More */}
              <Link
                to={`/blogs/${blog.id}`}
                className='mt-4 text-orange-500 hover:underline text-sm font-medium'
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
