import { Button, Label, Input } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[100vh] p-4 gap-2">
        <h1 className="text-amber-500 font-mono font-bold mb-4 text-center text-xl">
          COMPONENTS REUSABLE
        </h1>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@gmail.com"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="******"
        />
        <Button type="submit">Sign In</Button>
      </div>
    </div>
  );
}
