export default async function postNewest() {
    const res = await fetch(
      "https://basic-blog.teamrabbil.com/api/post-newest"
    );
    if(res.status===200){
        return res.json();
    }
    else{
        throw new Error("error fetching response");
    }
}
