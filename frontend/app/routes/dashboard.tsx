import { Navigation } from "../components/Navigation";
import { Dashboard } from "../components/Dashboard";
import { useApp } from "~/state/useApp";

export default function DashboardPage() {
  const { userName } = useApp()!;
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userName={userName} />
      <Dashboard userName={userName} />
      <div>11111</div>
    </div>
  );
}
