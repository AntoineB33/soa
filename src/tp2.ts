export function returnPeopleAndLength(strings: string[] = ['Miles', 'Mick']): [string, number][] {
    return strings.map(str => [str, str.length]);
}