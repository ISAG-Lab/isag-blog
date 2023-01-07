import { getBlogs } from "./blog";

export const getAllTags = async () => {
  const blogs = getBlogs();
  const tags = blogs.map((blog) => blog.tags);
  const flatTags = tags.flat();
  const uniqueTags = [...new Set(flatTags)];

  // convet to object
  const tagsObj = uniqueTags.map((tag) => {
    return {
      name: tag,
    };
  });

  return tagsObj;
};
