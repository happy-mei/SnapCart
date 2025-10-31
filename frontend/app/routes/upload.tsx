import { Navigation } from "../components/Navigation";
import { Upload } from "../components/Upload";
import { useApp } from "~/state/useApp";

export default function UploadPage() {
  const { userName } = useApp()!;
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userName={userName} />
      <Upload userName={userName} />
      <div>11111</div>
    </div>
  );
}
