import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div>
      {data.map((d: { id: number; title: string }) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
}
