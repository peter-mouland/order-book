import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import App from './app'

const server = setupServer(
    // Mock product search API
    http.get('/input-data.json', () => {
        return HttpResponse.json({
            id: 'pro_01',
            name: 'Test Product',
            description: 'Test Description',
        })
    })
)

describe('App', () => {
    beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
    afterAll(() => server.close())
    afterEach(() => {
        server.resetHandlers()
    })

    it('renders the global navigation with primary branding', () => {
        render(<App />)

        const branding = screen.getByText('Order Book')
        expect(branding).toBeInTheDocument()
    })

})
