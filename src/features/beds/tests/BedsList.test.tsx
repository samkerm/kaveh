import { render, screen, fireEvent, within } from '@testing-library/react-native';

import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../../../../tamagui.config';
import BedsList from '../components/BedsList';

describe('BedsList', () => {
  it('renders and calls actions', () => {
    const beds = [
      { id: '1', label: 'Bed 1', status: 'available' as const },
      { id: '2', label: 'Bed 2', status: 'reserved' as const },
    ];
    const onReserve = jest.fn();
    const onRelease = jest.fn();

    render(
      <TamaguiProvider config={tamaguiConfig}>
        <BedsList beds={beds} onReserve={onReserve} onRelease={onRelease} />
      </TamaguiProvider>,
    );

    const reserveBtn = screen.getAllByText('Reserve')[0];
    fireEvent.press(reserveBtn);
    expect(onReserve).toHaveBeenCalled();
  });
});
