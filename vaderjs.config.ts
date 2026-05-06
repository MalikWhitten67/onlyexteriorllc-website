import defineConfig from "vaderjs/config";
import vaderjsDaisyui from "vaderjs-daisyui"; 
console.log("Using vaderjs-daisyui plugin:", vaderjsDaisyui);
export default defineConfig({
  name: "Only Exterior LLC",
  port: 3000,
  plugins: [vaderjsDaisyui],
  host_provider:"vercel"
});
