import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

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
        <a href="/companies">Companies</a>
      </div>
    </main>
  );
}
