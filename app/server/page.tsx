import { revalidateTag } from "next/cache";
import Link from "next/link";

async function fetchData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      next: { revalidate: 5, tags: ["collection"] },
      headers: { accept: "application/json" },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function revalidate() {
  "use server";
  revalidateTag("collection");
}
export default async function Server() {
  const data = await fetchData();
  return (
    <>
      <form action={revalidate}>
        <div>{data.joke}</div>
        <button type="submit">revalidate</button>
      </form>
      <Link href="/client">go to client</Link>
    </>
  );
}
