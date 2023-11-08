declare module 'kale-helpers' {
    export function now(format?: string): string;
    export function convertDate(val: string, format?: string): string;
    export function uid(): string;
}