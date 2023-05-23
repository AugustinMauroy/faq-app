import Image from 'next/image';
import style from './index.module.scss';
import type { FC, ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
}

const Card: FC<Props> = ({ title, children }) => (
    <div className={style.card}>
        <Image
            src="/images/illustration.svg"
            alt="FAQ"
            width={250}
            height={250}
            className={style.image}
        />
        <div className={style.content}>
            <h2>{title}</h2>
            {children}
        </div>
    </div>
);

export default Card;
