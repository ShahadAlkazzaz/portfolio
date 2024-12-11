import React from "react";

const referencesData = [
  {
    name: "Susanne Lundström",
    title: "Chef",
    phone: "076-123 09 67",
    email: "susanne.lundstrom@stockholm.se",
  },
  {
    name: "Erik Olsson",
    title: "Chef",
    phone: "08-508 30 720",
    email: "erik.m.olsson@stockholm.se",
  },
  {
    name: "Betelhem Teshome",
    title: "Utbildningsledare",
    email: "betelhem.teshome@iths.se",
  },
  {
    name: "Lotta Armijo Holmberg",
    title: "Utbildningsledare",
    phone: "072-382 23 76",
    email: "lotta.armijo.holmberg@gmail.com",
  },
];

const References = () => {
  return (
    <div className="references">
      <h2 className="references-header">Referenser</h2>
      <div className="references-list">
        {referencesData.map((ref, index) => (
          <div className="reference-item" key={index}>
            <h3 className="reference-name">{ref.name}</h3>
            <p className="reference-title">{ref.title}</p>
            {ref.phone && <p className="reference-phone">Telefon: {ref.phone}</p>}
            <p className="reference-email">E-post: <a href={`mailto:${ref.email}`}>{ref.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
