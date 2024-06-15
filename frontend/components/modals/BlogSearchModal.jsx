import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiTwotoneCloseCircle } from 'react-icons/ai';

const BlogSearchModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle click outside modal to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (searchQuery.length > 0) {

      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:1337/api/blogs?populate=*&filters[blog_title][$containsi]=${searchQuery}`);
          const data = await response.json();
          setResults(data.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      fetchData();
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      ></div>
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 mx-4  md:max-w-md xl:max-w-xl w-full relative z-10"
      >
        <div className="closeicon absolute -top-4 -right-4 text-3xl cursor-pointer" onClick={onClose}>
          <AiTwotoneCloseCircle />
        </div>
        <h2 className="text-xl font-bold mb-4">Search Blogs...</h2>
        <input
          type="search"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          placeholder="Search Here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          {results.length > 0 ? (
            <ul className='max-h-64 overflow-y-auto'>
              {results.map((blog) => (
                <>

                  <Link href={`/blog/${blog.attributes.slug}`}>
                    <li key={blog.id} className="border-b py-2 w-full flex gap-2">
                      <div className='w-1/5 overflow-hidden'>
                        <Image
                          width={80}
                          loading="lazy"
                          height={80}
                          src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`}
                          className=" hover:scale-105 cursor-pointer transition duration-300 transform object-cover"
                          alt=""
                        />

                      </div>
                      <div className='w-4/5'>
                        <a href={`/blog/${blog.attributes.id}`} className="text-blue-500 hover:underline">
                          {blog.attributes.blog_title}
                        </a>
                      </div>
                    </li>
                  </Link>
                </>
              ))}

            </ul >
        ) : (
        searchQuery && <p>No results found.</p>
          )}
      </div>
    </div>
    </div >
  );
};

export default BlogSearchModal;
