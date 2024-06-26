import clsx from 'clsx';

export interface ButtonProps {
    onClick: () => void;
    className?: string;
}

export const Button = ({
    children,
    onClick,
    className,
}: React.PropsWithChildren<ButtonProps>) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
