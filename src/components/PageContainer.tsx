import clsx from 'clsx';

export const PageContainer = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'px-4',
                'py-16',
                'sm:px-16'
            )}
        >
            {children}
        </section>
    );
};
