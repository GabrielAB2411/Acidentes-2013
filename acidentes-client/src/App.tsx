import { QueryClientProvider, QueryClient } from "react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  )
}

export default App
