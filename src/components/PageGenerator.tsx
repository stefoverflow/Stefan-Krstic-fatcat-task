import { Cards } from '@homework-task/components/Cards';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { Layout } from '@homework-task/components/Layout';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { REGISTRY } from '@homework-task/constants/registry';

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
    [REGISTRY.componentHero]: Hero,
    [REGISTRY.componentTrustBar]: TrustBar,
    [REGISTRY.layoutSection]: Layout,
    [REGISTRY.itemsShowcase]: ItemsShowcase,
    [REGISTRY.panelShowcase]: PanelShowcase,
    [REGISTRY.componentCards]: Cards,
    // add components for generator
};

// recursive rendering function
const renderComponent = (component: ComponentData) => {
    const { type, props, components } = component;
    const Component = componentRegistry[type];

    if (!Component) {
        throw new Error(`Component type "${type}" not found in registry.`);
    }

    return (
        <Component {...props} key={type.toString() + components?.toString()}>
            {components && components.map(renderComponent)}
        </Component>
    );
};

export const PageGenerator = ({ data }: PageGeneratorProps) => {
    return data.map(renderComponent);
};
