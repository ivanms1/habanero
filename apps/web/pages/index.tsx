import { Button } from 'ui';

import { trpc } from '@/utils/trpc';

export default function Web() {
  const jobPostsQuery = trpc.jobPost.all.useQuery();
  return (
    <div>
      <h1 className='text-5xl'>Web</h1>
      {jobPostsQuery?.data?.map((jobPost) => (
        <div key={jobPost.id}>{jobPost.role}</div>
      ))}

      <Button variant='primary' className='w-40'>
        Boop
      </Button>
    </div>
  );
}
