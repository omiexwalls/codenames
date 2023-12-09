import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Seed the database with some initial data
 *
 * Note: Remix v2 does not support seeding in TypeScript yet, so this file is in JavaScript
 * @returns {Promise<void>}
 */
export default async function main() {
  await generateUsers();
  await generateCities();
}

async function generateUsers() {
  return prisma.$transaction(async (tx) => {
    const omie = await tx.user.upsert({
      where: { username: 'omie' },
      update: {
        username: 'omie',
      },
      create: {
        id: 'user_2ZHVDvKGf32gIbL9ExiPSkwV6cT', // ClerkJs ID
        username: 'omie',
      },
    });

    const paris = await tx.user.upsert({
      where: { username: 'paris' },
      update: {
        username: 'paris',
      },
      create: {
        id: 'user_2ZHVF24G6IBWltD1UKBIFKl46Im', // ClerkJs ID
        username: 'paris',
      },
    });

    await tx.duet.upsert({
      where: { name: 'Omie & Paris' },
      update: {
        name: 'Omie & Paris',
        players: {
          connect: [{ username: 'omie' }, { username: 'paris' }],
        },
      },
      create: {
        name: 'Omie & Paris',
        players: {
          connect: [{ username: 'omie' }, { username: 'paris' }],
        },
      },
    });
  });
}

async function generateCities() {
  return prisma.$transaction(async (tx) => {
    const prague = await tx.city.upsert({
      where: { name: 'Prague' },
      update: {
        name: 'Prague',
        turns: 9,
        mistakes: 9,
      },
      create: {
        name: 'Prague',
        turns: 9,
        mistakes: 9,
      },
    });
    const berlin = await tx.city.upsert({
      where: { name: 'Berlin' },
      update: {
        name: 'Berlin',
        turns: 8,
        mistakes: 8,
      },
      create: {
        name: 'Berlin',
        turns: 8,
        mistakes: 8,
      },
    });

    const london = await tx.city.upsert({
      where: { name: 'London' },
      update: {
        name: 'London',
        turns: 10,
        mistakes: 2,
      },
      create: {
        name: 'London',
        turns: 10,
        mistakes: 2,
      },
    });

    const montreal = await tx.city.upsert({
      where: { name: 'Montreal' },
      update: {
        name: 'Montreal',
        turns: 9,
        mistakes: 2,
      },
      create: {
        name: 'Montreal',
        turns: 9,
        mistakes: 2,
      },
    });

    const moscow = await tx.city.upsert({
      where: { name: 'Moscow' },
      update: {
        name: 'Moscow',
        turns: 8,
        mistakes: 8,
      },
      create: {
        name: 'Moscow',
        turns: 8,
        mistakes: 8,
      },
    });

    const losAlamos = await tx.city.upsert({
      where: { name: 'Los Alamos' },
      update: {
        name: 'Los Alamos',
        turns: 8,
        mistakes: 2,
      },
      create: {
        name: 'Los Alamos',
        turns: 8,
        mistakes: 2,
      },
    });

    const washingtonDC = await tx.city.upsert({
      where: { name: 'Washington DC' },
      update: {
        name: 'Washington DC',
        turns: 7,
        mistakes: 2,
      },
      create: {
        name: 'Washington DC',
        turns: 7,
        mistakes: 2,
      },
    });

    const bogota = await tx.city.upsert({
      where: { name: 'Bogota' },
      update: {
        name: 'Bogota',
        turns: 8,
        mistakes: 3,
      },
      create: {
        name: 'Bogota',
        turns: 8,
        mistakes: 3,
      },
    });

    const madrid = await tx.city.upsert({
      where: { name: 'Madrid' },
      update: {
        name: 'Madrid',
        turns: 10,
        mistakes: 0,
      },
      create: {
        name: 'Madrid',
        turns: 10,
        mistakes: 0,
      },
    });

    const casablanca = await tx.city.upsert({
      where: { name: 'Casablanca' },
      update: {
        name: 'Casablanca',
        turns: 9,
        mistakes: 3,
      },
      create: {
        name: 'Casablanca',
        turns: 9,
        mistakes: 3,
      },
    });

    const rioDeJaneiro = await tx.city.upsert({
      where: { name: 'Rio de Janeiro' },
      update: {
        name: 'Rio de Janeiro',
        turns: 7,
        mistakes: 3,
      },
      create: {
        name: 'Rio de Janeiro',
        turns: 7,
        mistakes: 3,
      },
    });

    const paris = await tx.city.upsert({
      where: { name: 'Paris' },
      update: {
        name: 'Paris',
        turns: 11,
        mistakes: 0,
      },
      create: {
        name: 'Paris',
        turns: 11,
        mistakes: 0,
      },
    });

    const vaticanCity = await tx.city.upsert({
      where: { name: 'Vatican City' },
      update: {
        name: 'Vatican City',
        turns: 8,
        mistakes: 0,
      },
      create: {
        name: 'Vatican City',
        turns: 8,
        mistakes: 0,
      },
    });

    const monteCarlo = await tx.city.upsert({
      where: { name: 'Monte Carlo' },
      update: {
        name: 'Monte Carlo',
        turns: 9,
        mistakes: 0,
      },
      create: {
        name: 'Monte Carlo',
        turns: 9,
        mistakes: 0,
      },
    });

    const capeTown = await tx.city.upsert({
      where: { name: 'Cape Town' },
      update: {
        name: 'Cape Town',
        turns: 10,
        mistakes: 1,
      },
      create: {
        name: 'Cape Town',
        turns: 10,
        mistakes: 1,
      },
    });

    const cairo = await tx.city.upsert({
      where: { name: 'Cairo' },
      update: {
        name: 'Cairo',
        turns: 9,
        mistakes: 5,
      },
      create: {
        name: 'Cairo',
        turns: 9,
        mistakes: 5,
      },
    });

    const baghdad = await tx.city.upsert({
      where: { name: 'Baghdad' },
      update: {
        name: 'Baghdad',
        turns: 7,
        mistakes: 5,
      },
      create: {
        name: 'Baghdad',
        turns: 7,
        mistakes: 5,
      },
    });

    const yakutsk = await tx.city.upsert({
      where: { name: 'Yakutsk' },
      update: {
        name: 'Yakutsk',
        turns: 8,
        mistakes: 4,
      },
      create: {
        name: 'Yakutsk',
        turns: 8,
        mistakes: 4,
      },
    });

    const tokyo = await tx.city.upsert({
      where: { name: 'Tokyo' },
      update: {
        name: 'Tokyo',
        turns: 8,
        mistakes: 1,
      },
      create: {
        name: 'Tokyo',
        turns: 8,
        mistakes: 1,
      },
    });

    const shanghai = await tx.city.upsert({
      where: { name: 'Shanghai' },
      update: {
        name: 'Shanghai',
        turns: 7,
        mistakes: 4,
      },
      create: {
        name: 'Shanghai',
        turns: 7,
        mistakes: 4,
      },
    });

    const hongKong = await tx.city.upsert({
      where: { name: 'Hong Kong' },
      update: {
        name: 'Hong Kong',
        turns: 6,
        mistakes: 4,
      },
      create: {
        name: 'Hong Kong',
        turns: 6,
        mistakes: 4,
      },
    });

    const bangkok = await tx.city.upsert({
      where: { name: 'Bangkok' },
      update: {
        name: 'Bangkok',
        turns: 7,
        mistakes: 7,
      },
      create: {
        name: 'Bangkok',
        turns: 7,
        mistakes: 7,
      },
    });

    const sydney = await tx.city.upsert({
      where: { name: 'Sydney' },
      update: {
        name: 'Sydney',
        turns: 9,
        mistakes: 1,
      },
      create: {
        name: 'Sydney',
        turns: 9,
        mistakes: 1,
      },
    });

    const singapore = await tx.city.upsert({
      where: { name: 'Singapore' },
      update: {
        name: 'Singapore',
        turns: 6,
        mistakes: 6,
      },
      create: {
        name: 'Singapore',
        turns: 6,
        mistakes: 6,
      },
    });

    const mumbai = await tx.city.upsert({
      where: { name: 'Mumbai' },
      update: {
        name: 'Mumbai',
        turns: 6,
        mistakes: 5,
      },
      create: {
        name: 'Mumbai',
        turns: 6,
        mistakes: 5,
      },
    });

    const dubai = await tx.city.upsert({
      where: { name: 'Dubai' },
      update: {
        name: 'Dubai',
        turns: 7,
        mistakes: 5,
      },
      create: {
        name: 'Dubai',
        turns: 7,
        mistakes: 5,
      },
    });

    const pragueChoices = await tx.city.update({
      where: { name: 'Prague' },
      data: {
        choices: {
          connect: [{ id: berlin.id }, { id: moscow.id }, { id: cairo.id }],
        },
      },
    });

    const berlinChoices = await tx.city.update({
      where: { name: 'Berlin' },
      data: {
        choices: {
          connect: [{ id: london.id }, { id: paris.id }],
        },
      },
    });

    const londonChoices = await tx.city.update({
      where: { name: 'London' },
      data: {
        choices: {
          connect: [{ id: montreal.id }],
        },
      },
    });

    const montrealChoices = await tx.city.update({
      where: { name: 'Montreal' },
      data: {
        choices: {
          connect: [{ id: losAlamos.id }],
        },
      },
    });

    const losAlamosChoices = await tx.city.update({
      where: { name: 'Los Alamos' },
      data: {
        choices: {
          connect: [{ id: washingtonDC.id }],
        },
      },
    });

    const parisChoices = await tx.city.update({
      where: { name: 'Paris' },
      data: {
        choices: {
          connect: [{ id: madrid.id }],
        },
      },
    });

    const madridChoices = await tx.city.update({
      where: { name: 'Madrid' },
      data: {
        choices: {
          connect: [{ id: monteCarlo.id }],
        },
      },
    });

    const monteCarloChoices = await tx.city.update({
      where: { name: 'Monte Carlo' },
      data: {
        choices: {
          connect: [{ id: vaticanCity.id }],
        },
      },
    });

    const cairoChoices = await tx.city.update({
      where: { name: 'Cairo' },
      data: {
        choices: {
          connect: [
            { id: casablanca.id },
            { id: baghdad.id },
            { id: capeTown.id },
          ],
        },
      },
    });

    const casablancaChoices = await tx.city.update({
      where: { name: 'Casablanca' },
      data: {
        choices: {
          connect: [{ id: bogota.id }],
        },
      },
    });

    const bogotaChoices = await tx.city.update({
      where: { name: 'Bogota' },
      data: {
        choices: {
          connect: [{ id: rioDeJaneiro.id }],
        },
      },
    });

    const capeTownChoices = await tx.city.update({
      where: { name: 'Cape Town' },
      data: {
        choices: {
          connect: [{ id: sydney.id }],
        },
      },
    });

    const sydneyChoices = await tx.city.update({
      where: { name: 'Sydney' },
      data: {
        choices: {
          connect: [{ id: tokyo.id }],
        },
      },
    });

    const baghdadChoices = await tx.city.update({
      where: { name: 'Baghdad' },
      data: {
        choices: {
          connect: [{ id: dubai.id }],
        },
      },
    });

    const dubaiChoices = await tx.city.update({
      where: { name: 'Dubai' },
      data: {
        choices: {
          connect: [{ id: mumbai.id }],
        },
      },
    });

    const moscowChoices = await tx.city.update({
      where: { name: 'Moscow' },
      data: {
        choices: {
          connect: [{ id: yakutsk.id }, { id: bangkok.id }],
        },
      },
    });

    const yakutskChoices = await tx.city.update({
      where: { name: 'Yakutsk' },
      data: {
        choices: {
          connect: [{ id: shanghai.id }],
        },
      },
    });

    const shanghaiChoices = await tx.city.update({
      where: { name: 'Shanghai' },
      data: {
        choices: {
          connect: [{ id: hongKong.id }],
        },
      },
    });

    const bangkokChoices = await tx.city.update({
      where: { name: 'Bangkok' },
      data: {
        choices: {
          connect: [{ id: singapore.id }],
        },
      },
    });
  });
}

main();
