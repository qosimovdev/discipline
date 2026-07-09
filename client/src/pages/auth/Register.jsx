import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/auth/useRegister";
import { toast } from "sonner";

function Register() {
  const { mutate: register, isPending } = useRegister();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

    console.log("submit bosildi");

    if (!formData.name || !formData.email || !formData.password) {
      return toast.error("Malumotlar to'ldirilmadi");
    }

    console.log("register chaqirilyapti");

    register(formData);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-app px-6">
      <GlassCard padding="lg" className="w-full max-w-md rounded-[36px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl text-primary font-bold">Create Account</h1>

          <p className="mt-2 text-secondary">
            Start building better habits today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="text-primary mb-2">Name</Label>

            <Input
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              className="input-theme h-12 text-primary"
            />
          </div>
          <div>
            <Label className="text-primary mb-2">Email</Label>

            <Input
              type="email"
              name="email"
              placeholder="username@example.com"
              value={formData.email}
              onChange={handleChange}
              className="input-theme h-12 text-secondary"
            />
          </div>
          <div>
            <Label className="text-primary mb-2">Password</Label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="h-12 input-theme text-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="h-12 w-full rounded-2xl"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold text-primary">
            Login
          </Link>
        </p>
      </GlassCard>
    </section>
  );
}

export default Register;
