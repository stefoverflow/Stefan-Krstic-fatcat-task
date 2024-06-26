import { Alert, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import clsx from 'clsx';

interface GenericListProps<T> {
    queryKey: string[];
    apiUrl: string;
    renderItem: (item: T) => React.ReactNode;
}

export const GenericList = <T,>({
    queryKey,
    apiUrl,
    renderItem,
}: GenericListProps<T>) => {
    const {
        data = [],
        error,
        isLoading,
    } = useQuery<T[]>({
        queryKey,
        queryFn: () => axios.get<T[]>(apiUrl).then((response) => response.data),
    });

    if (error instanceof Error)
        return (
            <div className={clsx('bg-white', 'px-4', 'py-4', 'rounded-2xl')}>
                <Alert severity="error">
                    An error has occurred: ${error?.message}
                </Alert>
            </div>
        );

    return (
        <section className={clsx('flex', 'flex-col', 'gap-16', 'sm:p-16')}>
            {isLoading
                ? Array.from({ length: 10 }).map((_, i) => (
                      <Skeleton key={i} variant="text" height={150} />
                  ))
                : data.map((x) => renderItem(x))}
        </section>
    );
};
