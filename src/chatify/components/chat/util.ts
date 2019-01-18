export function getStringTimestamp(timestamp: Date): string {
    return timestamp.getHours() + '.' + timestamp.getMinutes();
}
