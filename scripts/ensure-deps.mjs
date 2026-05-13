#!/usr/bin/env node
/**
 * Pre-start check: Node 18+ (per Polymarket client / project engines).
 * Run `npm install` separately to install dependencies.
 */
const major = parseInt(process.versions.node.split('.')[0], 10);
if (Number.isNaN(major) || major < 18) {
  console.error(`polymarket-trading-bot-v2: Node.js 18+ required (found ${process.version})`);
  process.exit(1);
}
