import Welcome from "../welcome/welcome"; 

export function meta() {
  return [
    { title: "Nizie's Cake" },
  ];
}

export default function Home() {
  return <Welcome />;
}
