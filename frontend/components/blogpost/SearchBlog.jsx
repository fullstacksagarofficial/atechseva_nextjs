// pages/SearchBlog.js
import React, { useState } from 'react';
import BlogSearchModal from '../modals/BlogSearchModal';


const SearchBlog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <h2 className="widget-title font-lg md:text-xl font-bold mb-4">Search Blog...</h2>
        <input
          type="search"
          className="services-inner z-10 gap-5 bg-white flex relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-2 rounded-xl ps-5"
          placeholder="Search Here..."
          onClick={openModal}
        />
      </div>
      <BlogSearchModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default SearchBlog;
