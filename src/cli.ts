#!/usr/bin/env node

import { createMCPServer, startStdioServer } from './mcp-server.js';
import { logger, LogLevel } from './logger.js';

// Parse command line arguments
const args = process.argv.slice(2);
const isHttpMode = args.includes('--http') || args.includes('-h');
const port = parseInt(args.find(arg => arg.startsWith('--port='))?.split('=')[1] || '3000');

// Set log level from environment variable or default to INFO
const logLevel = (process.env.LOG_LEVEL as LogLevel) || LogLevel.INFO;
logger.setLevel(logLevel);

async function main() {
  try {
    if (isHttpMode) {
      // HTTP mode - placeholder for future implementation
      logger.info('HTTP mode requested but not yet implemented');
      logger.info('Would start HTTP server on port', { port });
      console.log('HTTP mode is not yet implemented. Use stdio mode (default) for now.');
      process.exit(1);
    } else {
      // Stdio mode (default)
      await startStdioServer();
    }
  } catch (error) {
    logger.error('CLI startup failed', { 
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    process.exit(1);
  }
}

main(); 