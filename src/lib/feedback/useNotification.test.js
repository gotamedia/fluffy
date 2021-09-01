import useNotification from './useNotification'
import { renderHook, act } from '@testing-library/react-hooks'

describe('useNotification()', () => {
    it('renders a notification', async () => {
        const { result } = renderHook(() => useNotification())

        await act(async () => {
            result.current({
                title: 'notification title',
                description: 'notification description'
            })
        })
    })
})