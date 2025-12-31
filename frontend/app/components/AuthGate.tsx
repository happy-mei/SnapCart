import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import { useApp } from "~/state/useApp";

async function checkSession(options?: RequestInit) {
  const res = await fetch("/api/auth/session", { credentials: "include", ...options });
  const data = await res.json();
  if (res.ok) return data;
  // If token expired, try refresh
  if (res.status === 401 && data.expired) {
    const refreshed = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
    const refreshData = await refreshed.json();
    if (refreshed.ok) {
      return refreshData;
    }
    toast.error("Session expired, please log in again");
    throw new Error(refreshData.msg || "Request failed");
  }
  throw new Error(data.msg || "Request failed");
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const { onLogin } = useApp();

  useEffect(() => {
    checkSession()
      .then((data) => {
        onLogin(data.user);
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        if (location.pathname !== "/") {
          navigate("/", { replace: true });
        }
      })
      .finally(() => {
        setChecking(false);
      });
  }, []);

  if (checking) {
    return <div className="h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
    </div>;
  }

  return <>{children}</>;
}