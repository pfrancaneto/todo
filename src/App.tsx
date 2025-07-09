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

export default function App() {
  return (
    <div className="grid gap-3">
      <div>
        <Text variant="body-md-bold">Olá miundo</Text>
      </div>
      <div>
        <Icon svg={TrashIcon} />
        <Icon svg={SpinnerIcon} animate />
      </div>
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 3</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Deletar transação</Button>
      </div>
      <div>
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
      <div>
        <InputText />
      </div>
      <div>
        <InputCheckBox />
      </div>
      <div>
        <Card size="md">Olá Muindo</Card>
      </div>
    </div>
  );
}
