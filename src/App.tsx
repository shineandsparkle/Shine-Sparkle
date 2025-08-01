
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Formulations from "./pages/Formulations";
import FormulationDetail from "./pages/FormulationDetail";
import ProductPrices from "./pages/ProductPrices";
import PackingMaterials from "./pages/PackingMaterials";
import ChemicalPrices from "./pages/ChemicalPrices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formulations" element={<Formulations />} />
          <Route path="/formulation/:slug" element={<FormulationDetail />} />
          <Route path="/product-prices" element={<ProductPrices />} />
          <Route path="/packing-materials" element={<PackingMaterials />} />
          <Route path="/chemical-prices" element={<ChemicalPrices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
