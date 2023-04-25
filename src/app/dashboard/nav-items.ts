interface NavItem {
    path: string;
    title: string;
    icon?: string;
}

const links: NavItem[] = [
    {
        path: 'estudiantes',
        title: 'Estudiantes',
        icon: 'person',
    }
]

export default links;

