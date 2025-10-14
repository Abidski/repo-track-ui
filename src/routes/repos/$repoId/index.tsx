import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/repos/$repoId/")({
  component: RepoDetailsPage,
  loader: async ({ params }) => {
    var res = await fetch(`/api/ideas/${params.repoId}`);
    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  },
});

function RepoDetailsPage() {
  const idea = Route.useLoaderData();
  return <div>Hello {idea.title}</div>;
}
