import "./galeri.css";

export function meta() {
  return [{ title: "Aneka Kue Kering - Nizie's Cake" }];
}

const kueList = [
  { name: "Nastar", image: "/app/images/kuker/nastar.jpg" },
];

export default function KueKering() {
  return (
    <div className="galeri-container">
      <h1 className="galeri-title">Aneka Kue Kering</h1>
      <div className="grid-container">
        {kueList.map((kue, index) => (
          <div key={index} className="card">
            <img src={kue.image} alt={kue.name} className="kue-image" />
            <div className="kue-name">{kue.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
