export function joke(): string;
export function dad_joke(): string;
export function get_joke(): string;
export function get_dad_joke(): string;

export function roast(): string;
export function get_roast(): string;

export function quote(): string;
export function quoteData(): {
    id: number;
    quote: string;
    author: string;
};

export function getVersion(): string;