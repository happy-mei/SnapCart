import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { loginSchema } from "./schema";
import { toast } from "sonner";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.error || "Login failed");
        return;
      }

      console.log(resData);
      // navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Network error");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" {...form.register("email")} />
        {form.formState.errors.email && (
          <FieldError errors={[form.formState.errors.email]} />
        )}
      </Field>

      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input type="password" {...form.register("password")} />
        {form.formState.errors.password && (
          <FieldError errors={[form.formState.errors.password]} />
        )}
      </Field>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
};
