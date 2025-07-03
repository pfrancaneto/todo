import { cva, type VariantProps } from 'class-variance-authority';
import Text from './Text';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-green-light',
        secondary: 'bg-pink-light',
      },
      size: {
        sm: 'py-0.5 px-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
);

export const textVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-green-dark',
      secondary: 'text-pink-dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  className,
  size,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className, size })} {...props}>
      <Text className={textVariants({ variant })} variant="body-sm-bold">
        {children}
      </Text>
    </div>
  );
}
