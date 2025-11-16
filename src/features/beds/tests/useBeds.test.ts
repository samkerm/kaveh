import { renderHook, act } from '@testing-library/react-native';

import { useBeds } from '../hooks/useBeds';

describe('useBeds', () => {
  it('reserves and releases a bed', () => {
    const initial = [
      { id: '1', label: 'Bed 1', status: 'available' as const },
      { id: '2', label: 'Bed 2', status: 'available' as const },
    ];
    const { result } = renderHook(() => useBeds(initial));

    act(() => result.current.reserve('1'));
    expect(result.current.reserved).toHaveLength(1);
    expect(result.current.available).toHaveLength(1);

    act(() => result.current.release('1'));
    expect(result.current.reserved).toHaveLength(0);
    expect(result.current.available).toHaveLength(2);
  });
});
