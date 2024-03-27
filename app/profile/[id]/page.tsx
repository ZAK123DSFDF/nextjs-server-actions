import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
async function fetchPost(postId: any) {
  const post = await fetch(`http://localhost:3000/api/${postId}`, {
    method: "GET",
  });
  return post.json();
}
export async function generateMetadata({ params }: any) {
  const post = await fetchPost(params.id);
  console.log(post);
  return {
    title: post.id,
    description: post.description,
    openGraph: {
      title: "this is profile",
      description: "this is description",
      url: "localhost",
      siteName: "localhost",
      images: [
        {
          url: "localhost",
          width: 1000,
          height: 100,
        },
      ],
    },
  };
}
export default function ProfileId({ params }: any) {
  const id = params.id;
  return (
    <>
      <div>this is profileId:{id}</div>
      <Link href="/">go to home</Link>
      <Header />
      <Footer />
    </>
  );
}
