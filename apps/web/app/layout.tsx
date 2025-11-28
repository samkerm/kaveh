'use client';
import './globals.css';
import Link from 'next/link';
import { TamaguiProvider, XStack, Button } from 'tamagui';

import config from '../tamagui.config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TamaguiProvider config={config}>
          <XStack ai="center" jc="space-between" p="$4" bc="$background">
            <XStack gap="$4">
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Link href="/beds">
                <Button>Beds</Button>
              </Link>
              <Link href="/settings">
                <Button>Settings</Button>
              </Link>
            </XStack>
          </XStack>
          {children}
        </TamaguiProvider>
      </body>
    </html>
  );
}
