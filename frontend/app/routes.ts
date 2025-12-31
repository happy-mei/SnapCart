import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/login/index.tsx"),
  route("dashboard", "routes/dashboard/index.tsx"),
  route("upload", "routes/upload/index.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
