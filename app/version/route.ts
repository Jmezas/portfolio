export const dynamic = 'force-static';

/** Build actual. El cliente lo consulta para saber si hay una versión nueva publicada. */
export function GET() {
  return Response.json(
    { build: process.env.NEXT_PUBLIC_BUILD_ID },
    { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
  );
}
