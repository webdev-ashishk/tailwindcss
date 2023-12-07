import Gradient from "@/components/gradient";

export default function Home() {
  return (
    <main>
      <h1 className="text-center m-6 text-5xl font-bold bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent">
        Welcome to my Awesome Website
      </h1>
      <Gradient />
    </main>
  );
}
