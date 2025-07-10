import Container from '../components/Container';
import Logo from '../assets/images/Logo.svg?react';

export default function Header() {
  return (
    <Container className="mt-8 md:mt-20" as="header">
      <Logo className="h-9 md:h-12" />
    </Container>
  );
}
