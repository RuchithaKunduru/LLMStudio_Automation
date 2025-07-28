export function generateRandomPolicyName(prefix = 'QAPolicyPack'): string{
  const randomSuffix = Math.floor(Math.random()* 900);
  return `${prefix}${randomSuffix}`;
}