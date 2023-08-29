import Image from 'next/image'
import postCategories from './utils/postCategory'
import BlogLayout from './blog/layout'
import Blog from './blog/page'

export default async function Home() {
 
  return (
    <div>
      <div>
        <BlogLayout />
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
}
