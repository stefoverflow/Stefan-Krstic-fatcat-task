import clsx from 'clsx';

import { PageContainer } from '@homework-task/components/PageContainer';
import { User } from '@homework-task/models/User';

import { GenericList } from '../GenericList';

export const List = () => {
    const renderItem = (user: User) => (
        <>
            <div className={clsx('text-black', 'flex-none', 'text-l')}>
                {user.id}
            </div>
            <div className={clsx('text-black', 'flex-1', 'text-l')}>
                {user.name}
            </div>
            <div className={clsx('text-black', 'flex-1', 'text-l')}>
                {user.username}
            </div>
            <div className={clsx('text-black', 'flex-1', 'text-l')}>
                {user.email}
            </div>
            <div className={clsx('text-black', 'flex-1', 'text-l')}>
                {user.phone}
            </div>
        </>
    );

    return (
        <PageContainer>
            <GenericList<User>
                apiUrl="https://jsonplaceholder.typicode.com/users"
                queryKey={['fetchUsers']}
                renderItem={renderItem}
            />
        </PageContainer>
    );
};
