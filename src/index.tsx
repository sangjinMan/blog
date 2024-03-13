import ReactDOM from "react-dom/client";
import "./globalStyle.ts";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <GlobalStyle />
  </QueryClientProvider>
);
