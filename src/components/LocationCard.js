import React from "react";

export default function LocationCard({ loc }) {
  return (
    <div>
      <p>Name: {loc.name}</p>
      <p>Type: {loc.type}</p>
      <p>Dimension: {loc.dimension}</p>
      <p>Residents: {loc.residents}</p>
    </div>
  );
}
