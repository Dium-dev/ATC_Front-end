'use-client';
import { useState } from 'react';
import { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import Icon from '~/assets/icons/icon';
import { IconTypes } from '~/types/icons';

type AnchorProps = {
  title: string;
  to?: string;
};

export const Anchor: React.FC<AnchorProps> = ({ title, to }) => {
  return (
    <span className="w-full block p-2 hover:bg-primary-lm">
      <Link href={`${to}`} target="_blank">
        {title}
      </Link>
    </span>
  );
};

type DropDownMenuProps = {
  title?: string;
  icon?: IconTypes;
  anchorArray: AnchorProps[];
};

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  title,
  icon,
  anchorArray,
}) => {
  const [clickOpenMenu, setClickOpenMenu] = useState<boolean>(false);
  const [hoverOpenMenu, setHoverOpenMenu] = useState<boolean>(true);

  function clickHandleMenu() {
    setHoverOpenMenu(false);
    setClickOpenMenu(!clickOpenMenu);
  }

  function hoverHandleMenu() {
    setHoverOpenMenu(false);
    setClickOpenMenu(true);
  }

  function closeHoverMenu() {
    setClickOpenMenu(false);
  }

  return (
    <div
      className="w-20 flex flex-col items-center"
      onMouseEnter={hoverHandleMenu}
      onMouseLeave={closeHoverMenu}
      onClick={clickHandleMenu}
    >
      {title && (
        <span className="w-full block p-2 hover:bg-primary-lm rounded-md">
          {title}
        </span>
      )}
      {icon && (
        <div className="h-5 w-5 flex items-center">
          <Icon icon={icon} />
        </div>
      )}
      <ul
        id="lista"
        className={`flex flex-col items-center mt-4 border-2 border-solid border-secondary-dm rounded-md ${
          hoverOpenMenu ? 'hidden' : clickOpenMenu ? 'visible' : 'hidden'
        }`}
      >
        {anchorArray.map(({ title, to }) => (
          <li className="w-full" key={title}>
            <Anchor title={title} to={to} />
          </li>
        ))}
      </ul>
    </div>
  );
};
