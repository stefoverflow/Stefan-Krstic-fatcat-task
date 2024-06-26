import { PageContainer } from '@homework-task/components/PageContainer';
import { PageGenerator } from '@homework-task/components/PageGenerator';

export const Page = () => {
    const layoutProps = {
        background: 'red',
    };
    const componentProps = {
        title: 'Hero section',
        image: '/media/hero.png',
    };

    const trustbarProps = {
        images: [
            '/media/cats/cat_1.png',
            '/media/cats/cat_2.png',
            '/media/cats/cat_3.png',
            '/media/cats/cat_4.png',
            '/media/cats/cat_5.png',
        ],
    };

    const data = [
        {
            type: 'layoutSection',
            props: { ...layoutProps },
            components: [
                {
                    type: 'componentHero',
                    props: { ...componentProps },
                },
            ],
        },
        {
            type: 'layoutSection',
            props: { ...layoutProps },
            components: [
                {
                    type: 'componentHero',
                    props: { ...componentProps },
                },
                {
                    type: 'componentTrustBar',
                    props: { ...trustbarProps },
                },
            ],
        },
    ];
    return (
        <PageContainer>
            <PageGenerator data={data} />
        </PageContainer>
    );
};
