import clsx from 'clsx';

export const PageContainer = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    return (
        <section className={clsx('bg-cream', 'min-h-screen', 'p-16')}>
            {children}
        </section>
    );
};
