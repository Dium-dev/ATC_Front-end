'use client';
import Icon from '~/assets/icons/icon';
import { IconTypes } from '~/types/icons';

interface Props {
  text?: string;
  icon: IconTypes;
  className?: string;
}

export default function IconText({ icon, text, className }: Props) {
  return (
    <p className="flex gap-3">
      <i className={className}>
        <Icon icon={icon} />
      </i>
      <span>{text}</span>
    </p>
  );
}
