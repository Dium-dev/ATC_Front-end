'use client';
import Icon from '~/assets/icons/icon';
import { IconTypes } from '~/types/icons';

interface Props {
  text: string;
  icon: IconTypes;
}

export default function IconText({ icon, text }: Props) {
  return (
    <p className="flex gap-3">
      <i className="h-6 w-6">
        <Icon icon={icon} />
      </i>
      <span>{text}</span>
    </p>
  );
}
