import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Halaman utama
  route("/kue-kering", "routes/kue-kering.tsx"),
  route("/kue-ulang-tahun", "routes/kue-ulang-tahun.tsx"),
  route("/nasi-tumpeng", "routes/nasi-tumpeng.tsx"),
  route("/bolu", "routes/bolu.tsx"),
] satisfies RouteConfig;
