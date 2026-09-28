export async function observe(name, fn) {
  const start = performance.now();

  try {
    const result = await fn();

    const duration = performance.now() - start;

    console.log(`[observe] ${name} completed in ${duration.toFixed(2)}ms`);

    return result;
  } catch (error) {
    const duration = performance.now() - start;

    console.error(`[observe] ${name} failed in ${duration.toFixed(2)}ms`);

    throw error;
  }
}
