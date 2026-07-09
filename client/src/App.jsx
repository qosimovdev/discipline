import { Toaster } from "sonner";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
      <Toaster
        position="top-right"
        expand
        richColors
        toastOptions={{
          classNames: {
            toast: `
        !bg-[var(--glass-bg)]
        !backdrop-blur-2xl
        !border
        !border-[var(--glass-border)]
        !text-primary
        !shadow-[var(--shadow-lg)]
      `,

            title: "!text-primary !font-semibold",

            description: "!text-secondary",

            success: `
        !bg-emerald-500/15
        !border-emerald-500/25
        !text-emerald-400
      `,

            error: `
        !bg-red-500/15
        !border-red-500/25
        !text-red-400
      `,

            warning: `
        !bg-amber-500/15
        !border-amber-500/25
        !text-amber-400
      `,

            info: `
        !bg-primary/15
        !border-primary/25
        !text-primary
      `,
          },
        }}
      />
    </div>
  );
}

export default App;
