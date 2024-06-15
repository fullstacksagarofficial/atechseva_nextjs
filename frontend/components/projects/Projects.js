import React from 'react';
import Link from 'next/link'; // Import Link from 'next/link'
import Image from 'next/image';
import { LiaRupeeSignSolid } from "react-icons/lia";


const Project = ({ project }) => {
  const imageUrl = project.attributes && project.attributes.project_thumbnail && project.attributes.project_thumbnail.data && project.attributes.project_thumbnail.data.attributes && project.attributes.project_thumbnail.data.attributes.url;
  const publishedAt = project.attributes && project.attributes.publishedAt;
  const projectTitle = project.attributes && project.attributes.project_title;
  const slug = project.attributes && project.attributes.slug;
  const author = 'Sagar Kumar';
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <Link href={`project/${project.attributes.project_slug}`}>
      <div class="bg-white mx-4 group mb-5 rounded-lg cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition duration-300 group-hover:shadow-green-200 relative">
        <div class="h-48 overflow-hidden relative">
          <Image
            width={700}
            loading="lazy"
            height={600}
            src={`http://localhost:1337${imageUrl}`}
            className=" hover:scale-105 cursor-pointer transition duration-300 transform object-cover"
            alt=""
          />
          <span class="absolute right-0 top-0 bg-white rounded-md text-xs md:text-sm px-3 py-1 mt-2 shadow-lg mr-2 text-secondary-800 uppercase">{project.attributes.type}</span>
        </div>
        <div class="p-4 after:bg-green-400 after:absolute after:left-0 after:bottom-0 after:group-hover:-left-4 after:group-hover:-bottom-4 after:w-4 after:h-4 after:group-hover:w-12 after:group-hover:h-12  after:group-hover:bg-opacity-35 after:group-hover:rounded-full">
          <ul class="flex justify-between items-center w-full">
            <li class="text-sm text-gray-600 w-3/4">
              <h3 class=" overflow-hidden">
                <span class="capitalize text-md md:text-lg truncate w-full font-semibold text-gray-800 transition duration-300 block">
                  <Link href={`project/${project.attributes.project_slug}`} className="text-gray-800 hover:text-slate-600">{project.attributes.project_title}</Link>

                </span>
              </h3>
            </li>
            <li class="text-xs md:text-sm text-zinc-900 bg-zinc-300 px-3 py-2 shadow-lg rounded-3xl flex items-center group-hover:bg-green-600 transition-all group-hover:text-white">

              <span className="flex items-center">
                {project.attributes.price === '0' ? 'Free' : <><LiaRupeeSignSolid /> {project.attributes.price}</>}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>

  );
};

export default Project;
