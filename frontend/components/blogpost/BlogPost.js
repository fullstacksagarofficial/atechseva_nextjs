import React from 'react';
import Link from 'next/link'; // Import Link from 'next/link'
import Image from 'next/image';

const BlogPost = ({ blog }) => {

  const imageUrl = blog.attributes && blog.attributes.image && blog.attributes.image.data && blog.attributes.image.data.attributes && blog.attributes.image.data.attributes.url;
  const publishedAt = blog.attributes && blog.attributes.publishedAt;
  const blogTitle = blog.attributes && blog.attributes.blog_title;
  const slug = blog.attributes && blog.attributes.slug;
  const author = 'Sagar Kumar';
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <Link href={`/blog/${slug}`}>
      <div className="pre-blog-item bg-white mx-4 group">
        <div className="blog-inner-wrap  rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          <div className="pre-image-wrap h-32 md:h-48 overflow-hidden object-cover">
            <Image
              width={700}
              loading="lazy"
              height={600}
              src={`http://localhost:1337${imageUrl}`}
              className=" hover:scale-105 cursor-pointer transition duration-300 transform object-cover"
              alt=""
            />
          </div>
          <div className="pre-blog-content p-4">
            <ul className="pre-blog-meta md:flex justify-between">
              <li className="text-sm text-gray-600">By <span className="font-medium">{author}</span></li>
              <li className="text-sm text-gray-600 text-xs md:text-sm"> {formatDate(publishedAt)}</li>
            </ul>
            <h3 className="pre-post-title mt-2 mb-4 overflow-hidden">
              <span className="pre-pointer-events capitalize text-md md:text-lg truncate w-full font-semibold text-gray-800  transition duration-300 block group-hover:text-blue-500">{blogTitle}</span>
            </h3>
            <Link href={`/blog/${slug}`}>
              <div className="blog-btn-part w-max md:block hidden">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text text-sm md:text-md">Learn More</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
