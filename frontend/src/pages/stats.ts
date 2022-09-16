import Redis from "ioredis"; // Cache

// Setup redis
const redis = new Redis(import.meta.env.REDIS_URL);

// Response type
export type StatsResponse = {
  total: number;
  sample: number;
  builders: Record<string, number>;
  relays: Record<string, { reward: string; count: number }>;
};

export async function get() {
  // Collect stats from Redis
  const stats: string | null = await redis.get("stats");
  // Return stats JSON
  return new Response(stats, { status: 200 });
}
