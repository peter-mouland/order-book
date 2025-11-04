/** biome-ignore-all lint/a11y/useButtonType: testing only */
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GlobalNav } from './global-nav';

describe('GlobalNav.Container', () => {
    it('renders as a nav element', () => {
        render(
            <GlobalNav.Container>
                <span>Content</span>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders children', () => {
        render(
            <GlobalNav.Container>
                <div>Child content</div>
            </GlobalNav.Container>,
        );

        expect(screen.getByText('Child content')).toBeInTheDocument();
    });

    it('renders with default aria-label', () => {
        render(
            <GlobalNav.Container>
                <span>Content</span>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('navigation', { name: 'Navigation' })).toBeInTheDocument();
    });

    it('renders with custom aria-label', () => {
        render(
            <GlobalNav.Container aria-label="Main navigation">
                <span>Content</span>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    });
});

describe('GlobalNav.PrimaryNavigation', () => {
    it('renders children', () => {
        render(
            <GlobalNav.PrimaryNavigation>
                <a href="/">Home</a>
                <a href="/products">Products</a>
            </GlobalNav.PrimaryNavigation>,
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
    });
});

describe('GlobalNav.SecondaryNavigation', () => {
    it('renders children', () => {
        render(
            <GlobalNav.SecondaryNavigation>
                <button>Login</button>
                <button>Sign Up</button>
            </GlobalNav.SecondaryNavigation>,
        );

        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    });
});

describe('GlobalNav composition', () => {
    it('renders complete navigation with primary and secondary sections', () => {
        render(
            <GlobalNav.Container>
                <GlobalNav.PrimaryNavigation>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                </GlobalNav.PrimaryNavigation>
                <GlobalNav.SecondaryNavigation>
                    <button>Login</button>
                </GlobalNav.SecondaryNavigation>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    it('works with only primary navigation', () => {
        render(
            <GlobalNav.Container>
                <GlobalNav.PrimaryNavigation>
                    <a href="/">Home</a>
                </GlobalNav.PrimaryNavigation>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    });

    it('works with only secondary navigation', () => {
        render(
            <GlobalNav.Container>
                <GlobalNav.SecondaryNavigation>
                    <button>Settings</button>
                </GlobalNav.SecondaryNavigation>
            </GlobalNav.Container>,
        );

        expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument();
    });
});
