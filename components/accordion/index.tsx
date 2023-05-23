'use client';
import Image from 'next/image';
import { useState } from 'react';
import style from './index.module.scss';
import type { FC, ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
};

const Accordion: FC<Props> = ({ title, children }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={style.accordion}>
        <div
            className={style.accordion_header}
            onClick={() => setOpen(!open)}
            role="button"
            tabIndex={0}
        >
            <h3>{title}</h3>
            <Image
            src={'/images/arrow-down.svg'}
            alt="Plus"
            width={24}
            height={24}
            style={{
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-out',
            }}
            />
        </div>
        <div
            style={{
            maxHeight: open ? '1000px' : '0',
            opacity: open ? '1' : '0',
            transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
            }}
        >
            {children}
        </div>
        </div>
    );
};

export default Accordion;
