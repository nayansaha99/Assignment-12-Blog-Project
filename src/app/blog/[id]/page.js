import postDetails from "@/app/utils/postdetails";

export default async function BlogDetails({params}) {
  const id = params.id;
  const blogDetails = postDetails(id);
  const post = await blogDetails;
  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1  lg:grid-cols-1">
        <div className="card w-100 glass" key={post.list_id}>
          <figure>
            <img src={post.postDetails['img']} alt="card"></img>
          </figure>
          <div className="card-body">
            <h1 className="card-title underline -ml-8">
              {post.postDetails["title"]}
            </h1>
          </div>
          <p>{post.postDetails["content"]}</p>
        </div>
      </div>
    </div>
  );
}
