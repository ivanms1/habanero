import { trpc } from '@/utils/trpc';

export default function Web() {
  const jobPostsQuery = trpc.jobPost.all.useQuery();
  return (
    <div>
      <h1>Web</h1>
      {jobPostsQuery?.data?.map((jobPost) => (
        <div key={jobPost.id}>{jobPost.role}</div>
      ))}
    </div>
  );
}
