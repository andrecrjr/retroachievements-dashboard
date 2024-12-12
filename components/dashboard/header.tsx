interface DashboardHeaderProps {
  username: string;
  motto?: string;
}

export function DashboardHeader({ username, motto }: DashboardHeaderProps) {

  return (
    <div className="flex items-center justify-between space-y-2">
      <div className='grid md:grid-cols-2'>
        <h2 className="text-3xl font-bold tracking-tight capitalize">{username}{"'s"} Dashboard</h2>
        {motto && <p className="text-muted-foreground italic pl-3">{motto}</p>}
      </div>
    </div>
  );
}