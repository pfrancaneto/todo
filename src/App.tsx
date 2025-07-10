import TrashIcon from './assets/icons/trash.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import PlusIcon from './assets/icons/plus.svg?react';

import Icon from './components/Icon';
import Badge from './components/Badge';
import Text from './components/Text';
import Button from './components/Button';
import ButtonIcon from './components/ButtonIcon';
import InputText from './components/InputText';
import InputCheckBox from './components/InputCheckBox';
import Card from './components/Card';
import Container from './components/Container';
import Skeleton from './components/Skeleton';

export default function App() {
  return (
    <Container>
      <div className="grid gap-3">
        <div>
          <Text variant="body-md-bold">Olá miundo</Text>
        </div>
        <div>
          <Icon svg={TrashIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 3</Badge>

          <Badge loading>5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Deletar transação</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>
        <div>
          <InputText />
        </div>
        <div>
          <InputCheckBox />
          <InputCheckBox loading />
        </div>
        <div>
          <Card size="md">Olá Muindo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
