export default async function postCategories(){
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories"
  );
  if(res.status===200){
      return res.json();
  }
  else{
    throw new Error ("error fetching post");
  }
}