import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div style={{ padding: 64 }}>SqAId — booting…</div>} />
    </Routes>
  );
}
