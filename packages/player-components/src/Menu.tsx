import React, { useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { useTheme } from '@tempo-adjust/theme-provider';

import Button from './Button';
import * as css from './Menu.module.scss';

export type MenuItem = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

// A compact dropdown trigger for secondary actions. The list opens
// upward so it stays over our own controls rather than the page below.
const Menu = ({ label, items }: { label: string; items: MenuItem[] }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!open) {
      return;
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className={css.menu} ref={containerRef}>
      <Button
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        ⋯
      </Button>
      {open && (
        <div
          className={classnames(css.menuList, { [css.dark]: theme === 'dark' })}
          role="menu"
        >
          {items.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              className={css.menuItem}
              disabled={item.disabled}
              onClick={() => {
                setOpen(false);
                item.onClick();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
