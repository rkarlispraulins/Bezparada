import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import FAQ from "@/pages/faq";
import Kontakti from "@/pages/kontakti";
import Sikdatnes from "@/pages/sikdatnes";
import Privatums from "@/pages/privatums";
import { WhatsAppOpen } from "@/pages/whatsapp-open";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/faq" component={FAQ} />
      <Route path="/kontakti" component={Kontakti} />
      <Route path="/sikdatnes" component={Sikdatnes} />
      <Route path="/privatums" component={Privatums} />
      <Route path="/whatsapp-open" component={WhatsAppOpen} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
