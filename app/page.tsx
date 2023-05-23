import Card from '@/components/card';
import Accordion from '@/components/accordion';
import styles from './page.module.scss';
import type { FC } from 'react';

const Page: FC = () => (
    <div className={styles.page}>
        <Card title="FAQ">
            <Accordion title="What is this?">
                <p>It is a Next.js template.</p>
            </Accordion>
            <Accordion title="How do I use it?">
                <p>Clone it and modify it.</p>
            </Accordion>
            <Accordion title="Why did you make it?">
                <p>Because I can.</p>
            </Accordion>
        </Card>
    </div>
);

export default Page;
