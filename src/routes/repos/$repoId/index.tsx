import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

const fetchIdea = async (repoId: string) => {
  var res = await fetch(`/api/ideas/${repoId}`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
};

const ideaQueryOptions = queryOptions(ideaId: string) =>
  queryOptions({
    queryKey: ["idea", ideaId],
    queryFn: () => fetchIdea(ideaId),
  });

export const Route = createFileRoute("/repos/$repoId/")({
  component: RepoDetailsPage,
  loader: async ({ params }) => {
    return fetchIdea(params.repoId);
  },
});

function RepoDetailsPage() {
  const idea = Route.useLoaderData();
  return <div>Hello {idea.title}</div>;
}
