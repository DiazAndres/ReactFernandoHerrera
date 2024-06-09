import React, { useLayoutEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [sprites]);

  return (
    <>
      <section style={{ height: 200 }}>
        <h2 className="text-capitalize">
          #{id} - {name}
        </h2>
        {/* Imágenes */}
        <div>
          {sprites.map((sprite) => (
            <img ref={pRef} key={sprite} src={sprite} alt={name} />
          ))}
        </div>
      </section>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
