"use client";
import { userStore } from "@/store/user";

export default function Client1() {
  const us = userStore((state: any) => state.user);
  const updateName = userStore((state: any) => state.updatedNameInput);
  const updateName1 = userStore((state: any) => state.updatedName);
  function update(e: any) {
    updateName(e.target.value);
  }
  function update1() {
    updateName1("this is the updated zakk");
  }
  return (
    <>
      <div>{us.name}</div>
      <div>{us.age}</div>
      <input onChange={update} />
      <button onClick={update1}>update</button>
    </>
  );
}
