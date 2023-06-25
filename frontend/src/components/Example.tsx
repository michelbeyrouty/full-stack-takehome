import { useState } from "react";
import fetchHelloWorld from "../apis/fetchHelloWorld";

interface IFavorite {
  id: number;
  name: string;
  email: string;
}

export default function Example() {
  const [favorite, setFavorite] = useState<IFavorite | null>(null);

  async function handleHelloWorld() {
    const favorite = await fetchHelloWorld();

    setFavorite(favorite);
  }

  return (
    <div>
      {favorite ? (
        <p>
          My favorite Morty is <strong>{favorite.name}</strong>!
        </p>
      ) : null}
      <button type="button" onClick={handleHelloWorld}>
        Who's my favorite Morty?
      </button>
    </div>
  );
}
