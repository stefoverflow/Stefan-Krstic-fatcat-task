import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from '@mui/material';
import { useMutation as useReactQueryMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
    useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';

interface GenericForm<T extends FieldValues> {
    mutationFn: (data: T) => Promise<void>;
    validationSchema: ZodType;
    successMessage: string;
    renderForm: (
        register: UseFormRegister<T>,
        errors: FieldErrors<T>,
        isPending: boolean
    ) => React.ReactNode;
}

export const GenericForm = <T extends FieldValues>({
    mutationFn,
    validationSchema,
    successMessage,
    renderForm,
}: GenericForm<T>) => {
    const resolver = zodResolver(validationSchema);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({ resolver: resolver });
    const { mutate, isPending, isError, error, isSuccess } =
        useReactQueryMutation({ mutationFn: mutationFn });

    const handleFormSubmit = handleSubmit((data) => mutate(data));

    return (
        <form
            className={clsx(
                'flex',
                'flex-col',
                'gap-4',
                'bg-white',
                'rounded-2xl',
                'justify-center',
                'p-8',
                'sm:m-16'
            )}
            onSubmit={(e) => {
                e.preventDefault();
                if (isPending) return;
                void handleFormSubmit(e);
            }}
        >
            {renderForm(register, errors, isPending)}
            {isError && (
                <Alert severity="error">
                    An error occurred: {error.message}
                </Alert>
            )}
            {isSuccess && <Alert severity="success">{successMessage}</Alert>}
        </form>
    );
};
