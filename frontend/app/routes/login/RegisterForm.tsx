import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { registerSchema } from "./schema";
import { toast } from "sonner";

export const RegisterForm = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.error || "Registration failed");
        return;
      }

      toast.success("Registration successful! Please log in.");
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Network error");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input
          type="text"
          placeholder="Your name"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <FieldError errors={[form.formState.errors.name]} />
        )}
      </Field>

      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input
          type="email"
          placeholder="you@example.com"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <FieldError errors={[form.formState.errors.email]} />
        )}
      </Field>

      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input
          type="password"
          placeholder="8–32 chars, letters and numbers"
          {...form.register("password")}
        />
        {form.formState.errors.password && (
          <FieldError errors={[form.formState.errors.password]} />
        )}
      </Field>

      <Field>
        <FieldLabel>Confirm Password</FieldLabel>
        <Input
          type="password"
          placeholder="Repeat your password"
          {...form.register("confirmPassword")}
        />
        {form.formState.errors.confirmPassword && (
          <FieldError errors={[form.formState.errors.confirmPassword]} />
        )}
      </Field>

      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
};
