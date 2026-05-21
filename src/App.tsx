import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";

const Landing = lazy(() => import("@/pages/Landing"));
const Argus = lazy(() => import("@/pages/Argus"));
const CaseManager = lazy(() => import("@/pages/CaseManager"));
const Faro = lazy(() => import("@/pages/Faro"));
const Abacus = lazy(() => import("@/pages/Abacus"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        color: "var(--t3)",
        fontSize: 12,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/products/argus" element={<Argus />} />
          <Route path="/products/case-manager" element={<CaseManager />} />
          <Route path="/products/faro" element={<Faro />} />
          <Route path="/products/abacus" element={<Abacus />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
