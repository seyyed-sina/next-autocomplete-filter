import { FC, ReactNode } from 'react';

// import { LoadingSpinner, LoadingSpinnerProps } from '@components';
import { LoadingSpinner, LoadingSpinnerProps } from './LoadingSpinner';
import { clx } from '@/utils/helper';
// import { clx } from '@helpers';

interface Props extends LoadingSpinnerProps {
  title?: ReactNode;
  className?: string;
}

export const LoadingContent: FC<Props> = ({ className, title, ...props }) => {
  return (
    <div
      className={clx(
        'flex flex-col items-center gap-2 text-center justify-center text-sm',
        className,
      )}>
      <LoadingSpinner {...props} />
      {title}
    </div>
  );
};

LoadingContent.displayName = 'LoadingContent';
