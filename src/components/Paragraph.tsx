import { PropsWithChildren } from "react";
import './Paragraph.css';
import styles from './paragraph.module.css';

interface ParagraphProps{
    title: string
    description: string,
    // children?: PropsWithChildren ['children']
} 

type ParagraphWithChildren = PropsWithChildren<ParagraphProps>;

function Paragraph({title,description,children}: ParagraphWithChildren) {
    return <div className="paragraph">
    <h1 className={styles.focim}>{title}</h1>
    {children}  
    <p>{description}</p>
    </div>
}

export default Paragraph;