import { Button } from 'ui';
import { trpc } from '@/utils/trpc';

export default function Admin() {
  const createJob = trpc.jobPost.create.useMutation();

  function handleClick() {
    createJob.mutate({ content: 'test job', role: 'test role' });
  }

  return (
    <div>
      <h1 className='text-4xl'>Admin</h1>
      <Button onClick={handleClick}>beep</Button>
    </div>
  );
}
