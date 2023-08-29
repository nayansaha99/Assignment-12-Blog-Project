import Link from "next/link";
import postCategories from "../utils/postCategory";
import BlogNavbar from "../Components/blognavbar";

export default async function BlogLayout({ children }) {
  const posts = await postCategories();

  return (
    <div>
      <BlogNavbar />
      <main className="mt-10">{children}</main>
    </div>
  );
}
