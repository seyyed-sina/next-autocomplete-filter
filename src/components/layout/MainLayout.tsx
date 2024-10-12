import { memo } from 'react';

type MainLayoutProps = React.PropsWithChildren

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-dvh bg-slate-900 text-gray-400">
      <div className="container">{children}</div>
    </main>
  );
});

MainLayout.displayName = 'MainLayout';
