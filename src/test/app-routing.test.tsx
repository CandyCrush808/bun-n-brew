import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

function createTestRouter() {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });
}

describe("App routing", () => {
  it.each(["/", "/menu", "/visit", "/instagram"])("matches a page for %s", (path) => {
    const router = createTestRouter();
    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("falls back to the root not-found boundary for an unknown path", () => {
    const router = createTestRouter();
    const matches = router.matchRoutes("/does-not-exist");

    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });
});
