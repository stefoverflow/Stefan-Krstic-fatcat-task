import React from 'react';

import { Hero } from '@homework-task/components/Hero';
import { Layout } from '@homework-task/components/Layout';
import { TrustBar } from '@homework-task/components/TrustBar';

interface ComponentProps {
    [key: string]: unknown;
}

interface ComponentData {
    type: string;
    props: ComponentProps;
    components?: ComponentData[];
}

interface PageGeneratorProps {
    data: ComponentData[];
}

interface ComponentRegistry {
    [key: string]: React.ElementType;
}

const componentRegistry: ComponentRegistry = {
    componentHero: Hero,
    componentTrustBar: TrustBar,
    layoutSection: Layout,
};

// Recursive rendering function
const renderComponent = (component: ComponentData) => {
    const { type, props, components } = component;
    const Component = componentRegistry[type];

    if (!Component) {
        throw new Error(`Component type "${type}" not found in registry.`);
    }

    return (
        <Component {...props}>
            {components && components.map(renderComponent)}
        </Component>
    );
};

// PageGenerator Component
export const PageGenerator = ({ data }: PageGeneratorProps) => {
    return <div>{data.map(renderComponent)}</div>;
};
