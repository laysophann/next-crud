"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import useSWR from "swr";
import { splitCookiesString } from "next/dist/compiled/@edge-runtime/cookies";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function TopicsList() {
  const URL = `${process.env.URL || "http://localhost:3000/"}/api/todo`;
  const { data: topics, error } = useSWR(URL, fetcher);

  if (error) {
    return <div>Error loading topics</div>;
  }

  if (!topics) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {topics.topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-5">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <button className="text-blue-400">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}