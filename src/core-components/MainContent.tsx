import { cx } from 'class-variance-authority';
import React, { type ReactNode } from 'react';

interface MainContentProps extends React.ComponentProps<'main'> {
  children: ReactNode;
}

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <main className={cx('mt-4 md:mt-8', className)} {...props}>
      {children}
    </main>
  );
}
