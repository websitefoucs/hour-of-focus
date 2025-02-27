/**
 * Logger utility for server-side logging.
 *
 * This class provides static methods to log messages at different levels: DEBUG, INFO, WARN, and ERROR.
 * All log messages are appended to a file located at "./logs/backend.log", and each log entry is prefixed
 * with a timestamp (formatted using the Hebrew locale).
 *
 * Before logging, the directory for storing logs is created (if it does not already exist) via the init() method,
 * which is automatically called when the module is loaded.
 *
 * Log Methods:
 * - debug(...args): Logs debugging messages.
 * - info(...args): Logs informational messages.
 * - warn(...args): Logs warnings.
 * - error(...args): Logs error messages.
 *
 * Each method accepts a variable list of arguments, which can be strings, numbers, booleans, objects, or Error instances.
 * Non-string arguments are stringified; Error instances are logged by their message property.
 *
 * @remarks
 * - This module is intended for use in a server-only environment as indicated by the "server-only" import.
 * - Log entries are appended asynchronously to the log file.
 *
 * @example
 * Logger.info("Server started on port", 3000);
 * Logger.error(new Error("Unhandled exception occurred"));
 *
 * @module Logger
 */
import "server-only";
import fs from "fs";

type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

type LogArgument = string | number | boolean | object | Error;

class Logger {
  private static logsDir = "./logs";

  private static logFile = `${Logger.logsDir}/backend.log`;

  static init(): void {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir);
    }
  }

  static debug(...args: LogArgument[]): void {
    this.doLog("DEBUG", ...args);
  }

  static info(...args: LogArgument[]): void {
    this.doLog("INFO", ...args);
  }

  static warn(...args: LogArgument[]): void {
    this.doLog("WARN", ...args);
  }

  static error(...args: LogArgument[]): void {
    this.doLog("ERROR", ...args);
  }

  private static getTime(): string {
    const now = new Date();
    return now.toLocaleString("he");
  }

  private static isError(err: unknown): err is Error {
    return err instanceof Error;
  }

  private static stringifyArg(arg: LogArgument): string {
    if (typeof arg === "string") return arg;
    if (this.isError(arg)) return arg.message;
    return JSON.stringify(arg);
  }

  private static doLog(level: LogLevel, ...args: LogArgument[]): void {
    const strs = args.map((arg) => this.stringifyArg(arg));
    const line = `${this.getTime()} - ${level} - ${strs.join(" | ")}\n`;
    fs.appendFile(this.logFile, line, (err) => {
      if (err) console.error("FATAL: cannot write to log file");
    });
  }
}
Logger.init();
export default Logger;
