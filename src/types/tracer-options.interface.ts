export type LogLevel = 'info' | 'warn' | 'error' | 'debug'

export interface TracerOptions {
	level?: LogLevel
	colorize?: boolean
}
