import Badge from '../components/Badge';
import Button from '../components/Button';
import ButtonIcon from '../components/ButtonIcon';
import Card from '../components/Card';
import Container from '../components/Container';
import Icon from '../components/Icon';
import InputCheckBox from '../components/InputCheckBox';
import InputText from '../components/InputText';
import Skeleton from '../components/Skeleton';
import Text from '../components/Text';

import TrashIcon from '../assets/icons/trash.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';
import PlusIcon from '../assets/icons/plus.svg?react';

export default function Components() {
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
          <Button icon={PlusIcon} handling>
            Criando...
          </Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} handling />
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
