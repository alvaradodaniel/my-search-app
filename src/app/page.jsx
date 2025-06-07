"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    if (!search) return;
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${search}`, {
      headers: {
        "x-api-key":
          "live_Ji4Tz4PG5jKj3nkNTlCjrKgxtAhuFxTd9lSBLGM2V7AtFgi5hSuYxMfObm9g58NX",
      },
    })
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, [search]);

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-lime-200 rounded-2xl shadow-2xl flex flex-col h-[750px]">
        <div className="bg-lime-300 py-4 px-2 rounded-t-2xl flex">
          <input
            type="text"
            placeholder="Search a dog breed..."
            className="w-full h-12 px-4 rounded-2xl "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-y-auto p-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dogs.map((item) => (
              <div
                key={item.id}
                className="bg-blue-50 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image?.url}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg text-green-700">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.temperament}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
