export function generateRandomName(prefix = 'QAAssistant'): string {
  const randomSuffix = Math.floor(Math.random() * 100000);
  return `${prefix}${randomSuffix}`;
}
