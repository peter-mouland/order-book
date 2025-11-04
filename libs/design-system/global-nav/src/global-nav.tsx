import type { ReactNode } from 'react';
import styles from './global-nav.module.css';

interface GlobalNavProps {
    children: ReactNode;
    'aria-label'?: string;
}

function GlobalNavContainer({ children, 'aria-label': ariaLabel = 'Navigation' }: GlobalNavProps) {
    return (
        <nav className={styles.nav} aria-label={ariaLabel}>
            {children}
        </nav>
    );
}

interface GlobalNavSectionProps {
    children: ReactNode;
}

function GlobalNavPrimaryNavigation({ children }: GlobalNavSectionProps) {
    return <div className={styles.primary}>{children}</div>;
}

function GlobalNavSecondaryNavigation({ children }: GlobalNavSectionProps) {
    return <div className={styles.secondary}>{children}</div>;
}

export const GlobalNav = {
    Container: GlobalNavContainer,
    PrimaryNavigation: GlobalNavPrimaryNavigation,
    SecondaryNavigation: GlobalNavSecondaryNavigation,
};
