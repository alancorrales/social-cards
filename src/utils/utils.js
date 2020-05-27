import faker from 'faker';

export function generatePost(index) {
    return {
        profileName: faker.company.companyName(),
        profileAccount: joinNames(`@${faker.company.companyName()}`),
        profileAvatar: faker.image.avatar(),
        authorAccount: joinNames(`@${faker.name.findName()}`),
        date: faker.date.recent().toDateString().split(new Date().getFullYear().toString())[0],
        text: faker.lorem.sentences(),
        card: {
            image: `${process.env.PUBLIC_URL}/images/image${index}.jpg`,
            title: faker.company.catchPhraseDescriptor(),
            description: faker.company.catchPhrase(),
            url: faker.internet.url()
        },
        comments: faker.random.number(100),
        shares: faker.random.number(50),
        likes: faker.random.number(300)
    }
}

function joinNames(str) {
    const escapeChars = [
        ',', ';', '-', ' '
    ]

    escapeChars.forEach(escapeChar => {
        str = str.split(escapeChar).join('');
    });

    return str;
}