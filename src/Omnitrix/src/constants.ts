import Forearms from '../svgs/aliens/forearms.svg';
import Spidermonkey from '../svgs/aliens/spidermonkey.svg';
import Heatblast from '../svgs/aliens/heatblast.svg';
import Alienx from '../svgs/aliens/alienx.svg';
import Bigchill from '../svgs/aliens/bigchill.svg';
import Ripjaws from '../svgs/aliens/ripjaws.svg';
import Swampfire from '../svgs/aliens/swampfire.svg';
import Xlr8 from '../svgs/aliens/xlr8.svg';
import Wildmutt from '../svgs/aliens/wildmutt.svg';
import Brainstorm from '../svgs/aliens/brainstorm.svg';
import Humongosaur from '../svgs/aliens/humongosaur.svg';
import Upchuck from '../svgs/aliens/upchuck.svg';
import Waybig from '../svgs/aliens/waybig.svg';
import { SvgProps } from 'react-native-svg';

export const appColors = {
  primeGreen: '#E3F326',
  greenDarker: '#183334ff',
  baseBlueDark: '#28314D',
  baseBlueDarker: '#171b29ff',
  baseBlueLight: '#5c688eff',
};

export type AlienDataProps = {
  name: string;
  icon: React.FC<SvgProps>;
  ratio: number;
  description: string;
  lore: string;
  species: string;
  homeworld: string;
  powers: string[];
  stats: any;
};

export const alienData: AlienDataProps[] = [
  {
    name: 'Heatblast',
    icon: Heatblast,
    ratio: 1,
    description: 'Pyronite with control over fire and magma.',
    lore: 'Heatblast is a fiery alien from the planet Pyros. His entire body is made of flames and molten rock, giving him the ability to generate extreme heat, throw fireballs, and manipulate magma. He can also use fire to propel himself like a rocket, but water and cold temperatures weaken him.',
    species: 'Pyronite',
    homeworld: 'Pyros',
    powers: ['Fire manipulation', 'Heat blasts', 'Flight (propulsion)'],
    stats: { strength: 7, speed: 6, intelligence: 5, durability: 6 },
  },
  {
    name: 'Forearms',
    icon: Forearms,
    ratio: 0.9,
    description: 'Tetramand warrior with immense physical strength.',
    lore: 'Forearms is a red-skinned, four-armed alien from Khoros. Known for his brute force, he can lift massive objects, smash through walls, and create shockwaves with his powerful claps. Though not the fastest or most agile, his raw strength makes him a powerhouse in combat.',
    species: 'Tetramand',
    homeworld: 'Khoros',
    powers: ['Super strength', 'Wall climbing', 'Shockwave clap'],
    stats: { strength: 10, speed: 5, intelligence: 4, durability: 9 },
  },
  {
    name: 'Wildmutt',
    icon: Wildmutt,
    ratio: 0.7,
    description: 'Vulpimancer with heightened senses but no eyes.',
    lore: 'Wildmutt is a feral alien from Vulpin who has no eyes but compensates with enhanced smell, hearing, and echolocation. His beast-like agility and razor-sharp claws make him dangerous in close combat. Despite his animalistic nature, he’s loyal and dependable.',
    species: 'Vulpimancer',
    homeworld: 'Vulpin',
    powers: ['Enhanced senses', 'Super agility', 'Savage combat'],
    stats: { strength: 6, speed: 8, intelligence: 3, durability: 7 },
  },
  {
    name: 'Bigchill',
    icon: Bigchill,
    ratio: 0.7,
    description: 'Necrofriggian that can freeze enemies and turn intangible.',
    lore: 'Bigchill is a ghostly moth-like alien from Kylmyys. He can breathe freezing winds, encase foes in ice, and phase through solid matter. His wings allow him to fly silently and vanish in the air, making him an ideal stealth fighter.',
    species: 'Necrofriggian',
    homeworld: 'Kylmyys',
    powers: ['Cryokinesis', 'Intangibility', 'Invisibility'],
    stats: { strength: 6, speed: 7, intelligence: 6, durability: 7 },
  },
  {
    name: 'Swampfire',
    icon: Swampfire,
    ratio: 0.9,
    description: 'Methanosian with plant manipulation and regeneration.',
    lore: 'Swampfire is a plant-based alien from Methanos. He can regenerate lost limbs, control vegetation, and even ignite himself to shoot fireballs. His mix of durability and versatility makes him one of Ben’s most reliable forms.',
    species: 'Methanosian',
    homeworld: 'Methanos',
    powers: ['Regeneration', 'Plant manipulation', 'Fire blasts'],
    stats: { strength: 8, speed: 6, intelligence: 7, durability: 9 },
  },
  {
    name: 'XLR8',
    icon: Xlr8,
    ratio: 0.7,
    description: 'Kineceleran with super speed and reflexes.',
    lore: 'XLR8 is a velociraptor-like alien from Kinet who can reach supersonic speeds. His sharp claws help him scale walls, while his reflexes make him nearly untouchable in combat. Perfect for quick strikes and escapes.',
    species: 'Kineceleran',
    homeworld: 'Kinet',
    powers: ['Super speed', 'Agility', 'Wall running'],
    stats: { strength: 5, speed: 10, intelligence: 6, durability: 5 },
  },
  {
    name: 'Ripjaws',
    icon: Ripjaws,
    ratio: 1,
    description: 'Aquatic alien with incredible jaw strength.',
    lore: 'Ripjaws is a fish-like alien from Piscciss with gills, fins, and razor-sharp teeth. He is strongest underwater, where he can swim at high speeds and crush anything with his powerful bite. However, he must stay hydrated on land.',
    species: 'Piscciss Volann',
    homeworld: 'Piscciss',
    powers: ['Underwater breathing', 'Super strength', 'Powerful bite'],
    stats: { strength: 8, speed: 7, intelligence: 5, durability: 8 },
  },
  {
    name: 'Spider Monkey',
    icon: Spidermonkey,
    ratio: 0.7,
    description: 'Arachnichimp with agility and web-shooting powers.',
    lore: 'Spider Monkey is a blue, ape-like alien with four arms and a prehensile tail. His spider-like abilities allow him to shoot webbing, swing across terrain, and immobilize foes. Agile and quick, he excels in acrobatic combat.',
    species: 'Arachnichimp',
    homeworld: 'Aranhaschimmia',
    powers: ['Web shooting', 'Agility', 'Wall crawling'],
    stats: { strength: 6, speed: 7, intelligence: 5, durability: 6 },
  },
  {
    name: 'Alien X',
    icon: Alienx,
    ratio: 1,
    description: 'Celestialsapien with godlike powers.',
    lore: 'Alien X is one of the most powerful beings in the universe, capable of reality-warping, time manipulation, and cosmic control. However, his powers are locked behind internal debates between his three personalities, making him unreliable in battle.',
    species: 'Celestialsapien',
    homeworld: 'Forge of Creation',
    powers: ['Reality manipulation', 'Invulnerability', 'Time-space control'],
    stats: { strength: 12, speed: 12, intelligence: 12, durability: 12 },
  },
  {
    name: 'Brainstorm',
    icon: Brainstorm,
    ratio: 0.8,
    description: 'Genius alien with electrokinesis.',
    lore: 'Brainstorm is a crab-like alien with a massive intellect from Encephalonus IV. He can generate electricity from his pincers, hack technology, and strategize with superhuman intelligence. While not the strongest, his mind makes him invaluable.',
    species: 'Cerebrocrustacean',
    homeworld: 'Encephalonus IV',
    powers: ['Super intelligence', 'Electrokinesis', 'Technopathy'],
    stats: { strength: 4, speed: 5, intelligence: 10, durability: 5 },
  },
  {
    name: 'Humongousaur',
    icon: Humongosaur,
    ratio: 0.8,
    description: 'Vaxasaurian with massive strength and size.',
    lore: 'Humongousaur is a dinosaur-like alien who can grow up to 60 feet tall. His super strength allows him to crush enemies, while his tough skin gives him extreme durability. A walking tank on the battlefield.',
    species: 'Vaxasaurian',
    homeworld: 'Terradino',
    powers: ['Super strength', 'Size alteration', 'Durability'],
    stats: { strength: 10, speed: 6, intelligence: 4, durability: 10 },
  },
  {
    name: 'Upchuck',
    icon: Upchuck,
    ratio: 0.7,
    description: 'Gourmand who can eat and digest anything.',
    lore: 'Upchuck is a small but powerful alien from Peptos XI with the ability to consume any material and convert it into explosive energy blasts. His extendable tongues allow him to grab and swallow objects far larger than himself.',
    species: 'Gourmand',
    homeworld: 'Peptos XI',
    powers: ['Matter ingestion', 'Energy projection', 'Elastic tongue'],
    stats: { strength: 6, speed: 5, intelligence: 4, durability: 7 },
  },
  {
    name: 'Way Big',
    icon: Waybig,
    ratio: 1,
    description: 'Colossal alien with cosmic powers.',
    lore: 'Way Big is a To’kustar, a giant alien that can tower over buildings. He can unleash powerful cosmic energy beams from his chest and wields immense strength. Despite his size, he remains surprisingly fast and agile.',
    species: "To'kustar",
    homeworld: 'Cosmic Storms',
    powers: ['Cosmic energy beams', 'Super strength', 'Flight'],
    stats: { strength: 12, speed: 8, intelligence: 6, durability: 12 },
  },
];
