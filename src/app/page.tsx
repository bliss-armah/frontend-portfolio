import { fetchBlogs } from "./_actions/fetchBlogs";

export default async function Home() {
    const data =  await fetchBlogs();
    console.log(data);
    return (
        <>
        skdjflaj
        </>
    );
}
