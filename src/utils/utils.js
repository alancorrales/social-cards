export function joinNames(str) {
    const escapeChars = [
        ',', ';', '-', ' '
    ]

    escapeChars.forEach(escapeChar => {
        str = str.split(escapeChar).join('');
    });

    return str;
}