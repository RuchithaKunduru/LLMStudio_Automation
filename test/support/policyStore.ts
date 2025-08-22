import fs from 'fs';
import path from 'path';

const storePath = path.resolve(__dirname, '../test-data/policyPack.json');

export function savePolicyName(name: string): void {
  fs.mkdirSync(path.dirname(storePath), { recursive: true });
  fs.writeFileSync(storePath, JSON.stringify({ policyName: name }), 'utf-8');
}

export function getPolicyName(): string | undefined {
  try {
    const raw = fs.readFileSync(storePath, 'utf-8');
    const { policyName } = JSON.parse(raw);
    return policyName;
  } catch {
    return undefined;
  }
}
