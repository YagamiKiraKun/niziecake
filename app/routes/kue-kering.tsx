import "./galeri.css";

export function meta() {
  return [{ title: "Aneka Kue Kering - Nizie's Cake" }];
}

const kueList = [
  { name: "Nastar", image: "/app/images/kuker/nastar.jpg" },
  { name: "Putri Salju", image: "/app/images/kuker/putrisalju.jpg" },
  { name: "Kurma Coklat", image: "/app/images/kuker/kurcok.jpg" },
  { name: "Telor Gabus", image: "/app/images/kuker/telorgabus.jpeg" },
  { name: "Sagu Keju", image: "/app/images/kuker/sagukeju.jpg" },
  { name: "Choco Chips", image: "/app/images/kuker/chococips.jpg" },
  { name: "Semprit", image: "/app/images/kuker/semprit.jpg" },
  { name: "Kue Ulet", image: "/app/images/kuker/kueulet.jpg" },
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
