import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todo", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  // const { topics } = await getTopics();
  // console.log(topics)
  const topics = [
    {
      _id: "1",
      title: "Topic 1",
      description: "This is topic 1",
      createdAt: "2023-09-23T04:06:24.743Z",
      updatedAt: "2023-09-23T04:27:31.622Z",
    },
  ];

  return (
    <>
      {topics.map((topic) => (
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
