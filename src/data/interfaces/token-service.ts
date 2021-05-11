export interface TokenGenerator {
  (userId: string): string;
}
