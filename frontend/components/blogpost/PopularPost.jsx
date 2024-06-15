import { useEffect, useState } from "react";
import Link from "next/link";
import ImagePreloader from "@/components/preloader/ImagePreloader";
import axios from "axios";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import PopularPostLoader from "../preloader/PopularPostLoader";

const PopularPost = ({ handleMouseLeave, handleMouseEnter }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/blogs?populate=*&is_popular=true&pagination[pageSize]=4");
        setPosts(response.data.data);  // Adjust according to the response structure
      } catch (error) {
        console.error("Error etching popular posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPosts();
    
  }, []);

  if (loading) {
    return <> <PopularPostLoader/><PopularPostLoader/> </>;
  }

  return (
    <ul>
      {posts.map((blog, index) => (

        <li key={index} class="cat-item  mb-2 ">
          <Link
            href={`/blog/${blog.attributes.slug}`}
            id="card2"
            className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
            <div className="top-wrapper flex flex-nowrap justify-around w-full items-center">
              <div className="flex justify-between items-center">
                <div className="w-2/5">
                  <Image src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`} alt="" width={60} className="w-full" height={60} />
                </div>
                <div className="w-4/5">
                  <h4 className="title w-full text-ellipsis overflow-hidden  ps-5 text-sm">{blog.attributes.blog_title}</h4>
                </div>
              </div>
              <div>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularPost;
