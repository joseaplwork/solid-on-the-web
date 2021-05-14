// QA / Customer service
export function parseFirstName(fullName) {
    const nameParts = fullName.split(' ');
    const firstPart = nameParts[0];

    if (
        firstPart === 'Mr.' ||
        firstPart === 'Mrs.' ||
        firstPart === 'Dr.'
    ) {
        return nameParts[1];
    }

    return firstPart;
}