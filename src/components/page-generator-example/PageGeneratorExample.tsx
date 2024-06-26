import { PageGenerator } from '@homework-task/components/PageGenerator';
import { REGISTRY } from '@homework-task/constants/registry';

export const PageGeneratorExample = () => {
    const layoutProps = {
        background: 'white',
    };

    const panelShowcaseProps = {
        items: [
            {
                title: 'First showcase item',
                description: 'Description of first showcase item',
                image: '/media/panel/shape1.svg',
            },
            {
                title: 'Second showcase item',
                description: 'Description of second showcase item',
                image: '/media/panel/shape2.svg',
            },
            {
                title: 'Third showcase item',
                description: 'Description of third showcase item',
                image: '/media/panel/shape3.svg',
            },
        ],
    };

    const componentHeroProps = {
        title: 'Hero section',
        image: '/media/hero.png',
    };

    const itemsShowcaseProps = {
        items: [
            {
                title: 'First item',
                description:
                    'This is a description for first item in the showcase component.',
            },
            {
                title: 'Second item',
                description:
                    'This is a description for second item in the showcase component.',
            },
            {
                title: 'Third item',
                description:
                    'This is a description for third item in the showcase component.',
            },
            {
                title: 'Forth item',
                description:
                    'This is a description for forth item in the showcase component.',
            },
        ],
    };

    const componentCardsProps = {
        cards: [
            {
                title: 'First card',
                image: '/media/cards/shape1.svg',
                description: 'Description of the first card',
                background: 'gray',
                onClick: () => {},
                buttonText: 'click me',
            },
            {
                title: 'Second card',
                image: '/media/cards/shape2.svg',
                description: 'Description of the second card',
                background: 'gray',
                onClick: () => {},
                buttonText: 'click me',
            },
            {
                title: 'Third card',
                image: '/media/cards/shape3.svg',
                description: 'Description of the third card',
                background: 'gray',
                onClick: () => {},
                buttonText: 'click me',
            },
            {
                title: 'Forth card',
                image: '/media/cards/shape4.svg',
                description: 'Description of the forth card',
                background: 'gray',
                onClick: () => {},
                buttonText: 'click me',
            },
        ],
    };

    const trustbarProps = {
        images: [
            '/media/cats/cat_1.png',
            '/media/cats/cat_2.png',
            '/media/cats/cat_3.png',
            '/media/cats/cat_4.png',
            '/media/cats/cat_5.png',
            '/media/cats/cat_6.png',
            '/media/cats/cat_7.png',
            '/media/cats/cat_8.png',
            '/media/cats/cat_9.png',
            '/media/cats/cat_10.png',
        ],
    };

    const data = [
        {
            type: REGISTRY.layoutSection,
            props: layoutProps,
            components: [
                {
                    type: REGISTRY.panelShowcase,
                    props: panelShowcaseProps,
                },
                {
                    type: REGISTRY.componentHero,
                    props: componentHeroProps,
                },
                {
                    type: REGISTRY.itemsShowcase,
                    props: itemsShowcaseProps,
                    // components: [
                    // only working for one nesting... need to debug!
                    // ],
                },
                {
                    type: REGISTRY.componentCards,
                    props: componentCardsProps,
                },
            ],
        },
        {
            type: REGISTRY.componentTrustBar,
            props: trustbarProps,
        },
    ];

    return <PageGenerator data={data} />;
};
