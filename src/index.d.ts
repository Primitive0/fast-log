declare interface Logger {
    info(str: string): void;
    warn(str: string): void;
    error(str: string): void;
}

export function ScopedLogger(scope: string): Logger;
export const Logger: Logger;
