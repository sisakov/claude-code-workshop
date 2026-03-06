import { Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Welcome } from "@/pages/Welcome";
import { Installation } from "@/pages/Installation";
import { Modes } from "@/pages/Modes";
import { Context } from "@/pages/Context";
import { Commands } from "@/pages/Commands";
import { McpAgents } from "@/pages/McpAgents";
import { Exercises } from "@/pages/Exercises";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/context" element={<Context />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/mcp-agents" element={<McpAgents />} />
        <Route path="/exercises" element={<Exercises />} />
      </Route>
    </Routes>
  );
}
