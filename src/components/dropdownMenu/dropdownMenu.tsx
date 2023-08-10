'use-client'
import { useState } from 'react';
import { FunctionComponent, ReactNode } from "react";

type AnchorProps = {
  title: string,
  to?: string
}

export const Anchor: FunctionComponent<AnchorProps> = ({ title, to }) => {
  return (
    <span className="w-full block p-2 hover:bg-primary-lm">
      <a href={to} target="_blank">{title}</a>
    </span>
  )
};

type DropDownMenuProps = {
  title: string;
  anchorArray: AnchorProps[];
};

export const DropDownMenu = ({
  title,
  anchorArray,
}: DropDownMenuProps) => {
  const [clickOpenMenu, setClickOpenMenu] = useState<boolean>(false);
  const [hoverOpenMenu, setHoverOpenMenu] = useState<boolean>(true);

  function clickHandleMenu() {
    setHoverOpenMenu(false);
    setClickOpenMenu(!open);
  }

  function hoverHandleMenu() {
    setHoverOpenMenu(false);
    setClickOpenMenu(true);
  }

  function closeHoverMenu() {
    setClickOpenMenu(false)
  }

  return (
    <div
      className='w-fit'
      onMouseEnter={hoverHandleMenu}
      onMouseLeave={closeHoverMenu}
      onClick={clickHandleMenu}
    >
      <Anchor title={title} />
      <ul id="lista" className={`flex flex-col items-center mt-4 border-2 border-solid border-secondary-dm rounded-md ${hoverOpenMenu ? 'hidden' : clickOpenMenu ? 'visible' : 'hidden'}`}>
        {anchorArray.map(({ title, to }) => (
          <li className='w-full' key={title}>
            <Anchor title={title} to={to} />
          </li>
        ))}
      </ul>
    </div >
  );
};
