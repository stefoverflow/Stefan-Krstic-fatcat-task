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

    if (isLoading)
        return (
            <div className={clsx('flex', 'flex-col', 'gap-16')}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} variant="rectangular" height={70} />
                ))}
            </div>
        );

    return data.map((x, i) => (
        <div
            className={clsx(
                'flex',
                'flex-row',
                'flex-wrap',
                'gap-4',
                'p-4',
                'even:bg-disabled',
                'odd:bg-white',
                'py-6',
                'px-4',
                'first:rounded-t-2xl',
                'last:rounded-b-2xl'
            )}
            key={i}
        >
            {renderItem(x)}
        </div>
    ));
};
