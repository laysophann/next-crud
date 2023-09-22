"use client";

import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <h1>Remove</h1>
    </button>
  );
}

export default RemoveBtn;
