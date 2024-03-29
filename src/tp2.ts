export function returnPeopleAndLength(strings: string[] = ['Miles', 'Mick']): [string, number][] {
    return strings.map(str => [str, str.length]);
}

// Enumération pour convertir les nombres en chaînes de caractères
enum NumberToString {
    "zéro" = 0,
    "un" = 1,
    "deux" = 2,
    "trois" = 3,
    "quatre" = 4,
    "cinq" = 5,
    "six" = 6,
    "sept" = 7,
    "huit" = 8,
    "neuf" = 9
}

export function displayPeopleAndLength(strings?: string[], literal: boolean = false): void {
    const peopleAndLength = returnPeopleAndLength(strings);
    if (literal) {
        const filteredPeople = peopleAndLength.filter(([name, length]) => length <= 9);
        filteredPeople.forEach(([name, length]) => {
            console.log(`${name} contient ${NumberToString[length]} caractères`);
        });
    } else {
        peopleAndLength.forEach(([name, length]) => {
            console.log(`${name} contient ${length} caractères`);
        });
    }
}