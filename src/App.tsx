import { Header } from './components/other/header';
import '@xyflow/react/dist/style.css';
import { NodesCanvas } from './components/other/nodes-canvas';
import { Sidebar } from './components/other/sidebar';

export default function App() {
  return (
    <div className="min-h-svh p-2 grid bg-sidebar">
      <div className="relative border rounded-sm h-full flex flex-col z-1 overflow-hidden">
        <Header />
        <div className="relative rounded-b-sm flex-1 h-full w-full bg-background flex">
          <Sidebar />
          <NodesCanvas />
        </div>
      </div>
    </div>
  );
}
