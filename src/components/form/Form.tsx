// import clsx from 'clsx';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import axios from 'axios';
import { z } from 'zod';

import { GenericForm } from '@homework-task/components/GenericForm';
import { PageContainer } from '@homework-task/components/PageContainer';

const EmailSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required!' })
        .max(20, { message: 'Title is limited to 20 characters!' }),
    body: z
        .string()
        .min(1, { message: 'Body is required!' })
        .max(200, { message: 'Body is required to 200 characters!' }),
});

interface EmailForm {
    title: string;
    body: string;
}

type EmailSchemaType = z.infer<typeof EmailSchema>;

export const Form = () => {
    const sendEmail = async (data: EmailSchemaType): Promise<void> =>
        axios.post('https://jsonplaceholder.typicode.com/posts', data);

    return (
        <PageContainer>
            <GenericForm<EmailForm>
                mutationFn={sendEmail}
                validationSchema={EmailSchema}
                successMessage="Successfully sent email!"
                renderForm={(register, errors, isPending) => (
                    <>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            disabled={isPending}
                            autoFocus
                            {...register('title')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="body"
                            label="Body"
                            error={!!errors.body}
                            helperText={errors.body?.message}
                            disabled={isPending}
                            multiline
                            maxRows={5}
                            minRows={5}
                            {...register('body')}
                        />
                        <LoadingButton
                            type="submit"
                            variant="contained"
                            loading={isPending}
                        >
                            Send
                        </LoadingButton>
                    </>
                )}
            />
        </PageContainer>
    );
};
