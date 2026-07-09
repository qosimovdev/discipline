import { useState } from "react";
import { Link } from "react-router-dom";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import GlassCard from "@/components/common/GlassCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useLogin } from "@/hooks/auth/useLogin";
import { toast } from "sonner";

function Login() {
  const { mutate: login, isPending } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Email va parolni kiriting");
    }

    login(formData);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-app px-6">
      <GlassCard padding="lg" className="w-full max-w-md rounded-[36px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>

          <p className="mt-2 text-secondary">
            Continue your discipline journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="mb-2 text-primary">Email</Label>

            <Input
              type="email"
              name="email"
              placeholder="username@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="input-theme h-12"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <Label className="text-primary">Password</Label>

              <button
                type="button"
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="input-theme h-12 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="h-12 w-full rounded-2xl"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-semibold text-primary">
            Create Account
          </Link>
        </p>
      </GlassCard>
    </section>
  );
}

export default Login;
