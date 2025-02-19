import { useNavigate } from "react-router-dom";
import "./welcome.css";
import kukerImg from "./kuker.png";
import birthdayCakeImg from "./birthdaycake.png";
import nasiTumpengImg from "./nasitumpeng.webp";
import boluImg from "./bolu.webp";

const categories = [
  { name: "Aneka Kue Kering", img: kukerImg, path: "/kue-kering" },
  { name: "Kue Ulang Tahun", img: birthdayCakeImg, path: "/kue-ulang-tahun" },
  { name: "Nasi Tumpeng", img: nasiTumpengImg, path: "/nasi-tumpeng" },
  { name: "Cakes", img: boluImg, path: "/bolu" },
];

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Nizie's Cake!</h1>
      <div className="category-list">
        {categories.map(({ name, img, path }, index) => (
          <div key={index} className="category-card" onClick={() => navigate(path)}>
            <img src={img} alt={name} className="category-img" />
            <div className="category-label">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
