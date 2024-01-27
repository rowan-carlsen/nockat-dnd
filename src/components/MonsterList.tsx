import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://aeueitxbohzqcduxkdqs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldWVpdHhib2h6cWNkdXhrZHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4ODgyNDgsImV4cCI6MjAyMTQ2NDI0OH0.C9OThzV7Ef4A59G6ya9OZPnJS5r7WfoHI7VA931y3T0"
);

export default function MonsterList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMonsters();
  }, []);

  async function getMonsters() {
    const { data } = await supabase.from("monsters").select();
    setList(data);
  }

  return (
    <ul>
      {list.map((monster, i) => (
        <li key={i}>{monster.name}</li>
      ))}
    </ul>
  );
}
