import Link from "next/link";
import postCategories from "../utils/postCategory";

export default async function BlogNavbar(){
    const posts = await postCategories();
    return (
      <div class="navbar  mt-20 bg-base-100">
        <div class="navbar-start">
          <div class="dropdown absolute right-0 h-16 w-16 ..">
            <label tabindex="0" class="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h20M15 12h8m-16 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 -m-40 -mt-1"
            >
              <li>
                {posts.map((post) => {
                  return (
                    <Link className="text-sm hover:text-base" href="/">
                      <p className="pb-5">{post.name}</p>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 -mb-3.5">
            <nav className="flex space-x-12">
              {posts.map((post) => {
                return (
                  <Link className="" href="/">
                    <p className="pb-5">{post.name}</p>
                  </Link>
                );
              })}
            </nav>
          </ul>
        </div>
        <div class="navbar-end"></div>
      </div>
    );
}