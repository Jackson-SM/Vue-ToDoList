/*
type TagTaskProps = {
    name: string;
    color: string;
};
 */

export type TaskProps = {
    id: number;
    title: string;
    description: string;
    tags?: string[];
};
