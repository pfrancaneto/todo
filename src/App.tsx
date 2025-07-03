import TrashIcon from './assets/icons/trash.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';

import Icon from './components/Icon';
import Badge from './components/Badge';
import Text from './components/Text';

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
    </div>
  );
}
