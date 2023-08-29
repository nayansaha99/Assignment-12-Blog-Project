import Link from "next/link";
import postNewest from "../utils/postnewest";
export default async function Blog() {

const newposts = await postNewest();
  return (
        <div className="container mx-auto my-10 p-10">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newposts.map((newpost) => {
              return (
                <div>
                  <div  key={newpost.id}>
                    <Link href={`/blog/${newpost.id}`}>
                      <figure>
                        <img src={newpost.img} alt=""></img>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{newpost.title}</h2>
                        <p>{newpost.short}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

    
  );
}
