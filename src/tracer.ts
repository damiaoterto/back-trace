import { Writable } from 'stream'
import { TracerOptions } from './types/tracer-options.interface'

export class Tracer {
	private readonly colors: Record<string, string>

	private readonly outputStream: Writable

	private readonly errorStream: Writable

	constructor(private readonly options: TracerOptions = {}) {
		this.options = {
			level: this.options.level || 'info',
			colorize: this.options.colorize || false,
			...this.options,
		}

		this.colors = {
			error: '\x1b[31m', // Red
			warn: '\x1b[33m', // Yellow
			info: '\x1b[36m', // Cyan
			debug: '\x1b[32m' // Green
		}
	}
}
