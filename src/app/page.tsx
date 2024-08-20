import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';
import StatusLabel, { Status } from './components/status-label';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <div className="flex flex-col gap-4 w-[200px]">
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        <StatusLabel status={Status.NotActive} disabled={true}>
          Suspended
        </StatusLabel>
        <AddCompanyButton />
        <Link href="/companies">Companies</Link>
        <MagicButton />
      </div>
    </main>
  );
}
