type User = {
    id: number;
    lastName?: string;
    firstName?: string;
    age: number;
}

type Photo = {
    img: string;
    title: string;
    rows?: number;
    cols?: number;
    author?: string;
}

export type { User, Photo };