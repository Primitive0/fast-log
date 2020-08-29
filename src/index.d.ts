declare interface Logger {
    info(str: string): void;
    warn(str: string): void;
    error(str: string): void;
}

declare interface LoggingFunctions extends Logger {
    write_current_time(): void;
}


export const LoggingFunctions: LoggingFunctions;
export const Logger: Logger;
export function ScopedLogger(scope: string): Logger;
