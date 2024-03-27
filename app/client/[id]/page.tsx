"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function ClientId() {
  const params = useParams();
  const searchParams = useSearchParams();
  return (
    <>
      <div>client id:{params.id}</div>
      <div>client searchId:{searchParams.get("new")}</div>
    </>
  );
}
