type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Product extends Base {
    image: Image;
    name: string;
    slug: Slug;
    price: number;
    details: Block[];
    detected: boolean;
}

interface Banner extends Base {
    image: Image;
    buttonText: string;
    product: string;
    desc: string;
    smallText: string;
    midText: string;
    largeText: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}