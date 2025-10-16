import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diarize - Conectando Empregadas Domésticas e Contratantes',
  description: 'Plataforma que conecta empregadas domésticas e contratantes de forma simples e segura.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
