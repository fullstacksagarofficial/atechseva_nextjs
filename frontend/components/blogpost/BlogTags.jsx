import { useEffect, useState } from "react";
import axios from "axios";
import Tags from "../preloader/Tags";
import Link from "next/link";

const BlogTag = ({ handleMouseLeave, handleMouseEnter }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogTags = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/blogs?fields[0]=tags&is_popular=true");
        const allTags = response.data.data.flatMap(blog => blog.attributes.tags.map(tag => tag.name));
        const uniqueTags = [...new Set(allTags)].slice(0, 16); // Slice to get maximum 10 unique tags
        setTags(uniqueTags);
      } catch (error) {
        console.error("Error fetching popular tags:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogTags();
  }, []);




  if (loading) {
    return <><Tags /><Tags /><Tags /><Tags /><Tags /><Tags /><Tags /></>;
  }

  return (
    <>
      {tags.map((tag, index) => (
        <Link  key={index} href={`/blog/tags/${tag}`}>
          <div
           
            className="services-inner z-10 gap-5 bg-white flex relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer"
          >
            {tag}
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogTag;
