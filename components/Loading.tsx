import Post from "@/components/Post";

export default function Loading() {
  return (
    <section>
      {Array.from({ length: 20 }).map((_, i) => (
        <Post isLoading key={i} />
      ))}
    </section>
  );
}
