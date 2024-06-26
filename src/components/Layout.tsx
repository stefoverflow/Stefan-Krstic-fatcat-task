import clsx from 'clsx';

export interface LayoutProps {
    background: string;
}

export const Layout = ({
    children,
    background,
}: React.PropsWithChildren<LayoutProps>) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
