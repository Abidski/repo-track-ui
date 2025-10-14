import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/repos/")({
  head: () => ({
    meta: [
      {
        title: "View Statictics",
      },
    ],
  }),
  component: ReposPage,
});

function ReposPage() {
  return <div>Hello "/repo/repo"!</div>;
}
