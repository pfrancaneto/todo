import TrashIcon from './assets/icons/trash.svg?react';
import Icon from './components/Icon';

export default function App() {
  return (
    <div className="">
      <div>
        <Icon svg={TrashIcon} className="fill-green-base" />
      </div>
    </div>
  );
}
