const l = 'https://wikipedia.org/wiki/';

const elements = [
  { symbol: 'H', col: 1, row: 1, link: 'Hydrogen', color: 'pink' },
  { symbol: 'He', col: 18, row: 1, link: 'Helium', color: 'yellow' },
  { symbol: 'Li', col: 1, row: 2, link: 'Lithium', color: 'green' },
  { symbol: 'Be', col: 2, row: 2, link: 'Beryllium', color: 'darkGreen' },
  { symbol: 'B', col: 13, row: 2, link: 'Boron', color: 'lavender' },
  { symbol: 'C', col: 14, row: 2, link: 'Carbon', color: 'pink' },
  { symbol: 'N', col: 15, row: 2, link: 'Nitrogen', color: 'pink' },
  { symbol: 'O', col: 16, row: 2, link: 'Oxygen', color: 'pink' },
  { symbol: 'F', col: 17, row: 2, link: 'Flourine', color: 'maroon' },
  { symbol: 'Ne', col: 18, row: 2, link: 'Neon', color: 'yellow' },
  { symbol: 'Na', col: 1, row: 3, link: 'Sodium', color: 'green' },
  { symbol: 'Mg', col: 2, row: 3, link: 'Magnesium', color: 'darkGreen' },
  { symbol: 'Al', col: 13, row: 3, link: 'Aluminium', color: 'mauve' },
  { symbol: 'Si', col: 14, row: 3, link: 'Silicon', color: 'lavender' },
  { symbol: 'P', col: 15, row: 3, link: 'Phosphor', color: 'pink' },
  { symbol: 'S', col: 16, row: 3, link: 'Sulfur', color: 'pink' },
  { symbol: 'Cl', col: 17, row: 3, link: 'Chlorine', color: 'maroon' },
  { symbol: 'Ar', col: 18, row: 3, link: 'Argon', color: 'yellow' },
  { symbol: 'K', col: 1, row: 4, link: 'Potassium', color: 'green' },
  { symbol: 'Ca', col: 2, row: 4, link: 'Calcium', color: 'darkGreen' },
  { symbol: 'Sc', col: 3, row: 4, link: 'Scandium', color: 'blue' },
  { symbol: 'Ti', col: 4, row: 4, link: 'Titanium', color: 'blue' },
  { symbol: 'V', col: 5, row: 4, link: 'Vanadium', color: 'blue' },
  { symbol: 'Cr', col: 6, row: 4, link: 'Chromium', color: 'blue' },
  { symbol: 'Mn', col: 7, row: 4, link: 'Manganese', color: 'blue' },
  { symbol: 'Fe', col: 8, row: 4, link: 'Iron', color: 'blue' },
  { symbol: 'Co', col: 9, row: 4, link: 'Cobalt', color: 'blue' },
  { symbol: 'Ni', col: 10, row: 4, link: 'Nickel', color: 'blue' },
  { symbol: 'Cu', col: 11, row: 4, link: 'Copper', color: 'blue' },
  { symbol: 'Zn', col: 12, row: 4, link: 'Zinc', color: 'blue' },
  { symbol: 'Ga', col: 13, row: 4, link: 'Gallium', color: 'mauve' },
  { symbol: 'Ge', col: 14, row: 4, link: 'Germanium', color: 'lavender' },
  { symbol: 'As', col: 15, row: 4, link: 'Arsenic', color: 'lavender' },
  { symbol: 'Se', col: 16, row: 4, link: 'Selenium', color: 'pink' },
  { symbol: 'Br', col: 17, row: 4, link: 'Bromine', color: 'maroon' },
  { symbol: 'Kr', col: 18, row: 4, link: 'Krypton', color: 'yellow' },
  { symbol: 'Rb', col: 1, row: 5, link: 'Rubidium', color: 'green' },
  { symbol: 'Sr', col: 2, row: 5, link: 'Strontium', color: 'darkGreen' },
  { symbol: 'Y', col: 3, row: 5, link: 'Yttrium', color: 'blue' },
  { symbol: 'Zr', col: 4, row: 5, link: 'Zirconium', color: 'blue' },
  { symbol: 'Nb', col: 5, row: 5, link: 'Niobium', color: 'blue' },
  { symbol: 'Mo', col: 6, row: 5, link: 'Molybdenum', color: 'blue' },
  { symbol: 'Tc', col: 7, row: 5, link: 'Technetium', color: 'blue' },
  { symbol: 'Ru', col: 8, row: 5, link: 'Ruthenium', color: 'blue' },
  { symbol: 'Rh', col: 9, row: 5, link: 'Rhodium', color: 'blue' },
  { symbol: 'Pd', col: 10, row: 5, link: 'Palladium', color: 'blue' },
  { symbol: 'Ag', col: 11, row: 5, link: 'Silver', color: 'blue' },
  { symbol: 'Cd', col: 12, row: 5, link: 'Cadmium', color: 'blue' },
  { symbol: 'In', col: 13, row: 5, link: 'Indium', color: 'mauve' },
  { symbol: 'Sn', col: 14, row: 5, link: 'Tin', color: 'mauve' },
  { symbol: 'Sb', col: 15, row: 5, link: 'Antimon', color: 'lavender' },
  { symbol: 'Te', col: 16, row: 5, link: 'Tellurium', color: 'lavender' },
  { symbol: 'I', col: 17, row: 5, link: 'Iodine', color: 'maroon' },
  { symbol: 'Xe', col: 18, row: 5, link: 'Xenon', color: 'yellow' },
  { symbol: 'Cs', col: 1, row: 6, link: 'Caesium', color: 'green' },
  { symbol: 'Ba', col: 2, row: 6, link: 'Barium', color: 'darkGreen' },
  { symbol: 'Lu', col: 3, row: 6, link: 'Lutetium', color: 'blue' },
  { symbol: 'Hf', col: 4, row: 6, link: 'Hafnium', color: 'blue' },
  { symbol: 'Ta', col: 5, row: 6, link: 'Tantalum', color: 'blue' },
  { symbol: 'W', col: 6, row: 6, link: 'Tungsten', color: 'blue' },
  { symbol: 'Re', col: 7, row: 6, link: 'Rhenium', color: 'blue' },
  { symbol: 'Os', col: 8, row: 6, link: 'Osmium', color: 'blue' },
  { symbol: 'Ir', col: 9, row: 6, link: 'Iridium', color: 'blue' },
  { symbol: 'Pt', col: 10, row: 6, link: 'Platinum', color: 'blue' },
  { symbol: 'Au', col: 11, row: 6, link: 'Gold', color: 'blue' },
  { symbol: 'Hg', col: 12, row: 6, link: 'Mercury_(element)', color: 'blue' },
  { symbol: 'Tl', col: 13, row: 6, link: 'Thallium', color: 'mauve' },
  { symbol: 'Pd', col: 14, row: 6, link: 'Lead', color: 'mauve' },
  { symbol: 'Bi', col: 15, row: 6, link: 'Bismuth', color: 'mauve' },
  { symbol: 'Po', col: 16, row: 6, link: 'Polonium', color: 'lavender' },
  { symbol: 'At', col: 17, row: 6, link: 'Astatine', color: 'maroon' },
  { symbol: 'Rn', col: 18, row: 6, link: 'Radon', color: 'yellow' },
  { symbol: 'Fr', col: 1, row: 7, link: 'Francium', color: 'green' },
  { symbol: 'Ra', col: 2, row: 7, link: 'Radium', color: 'darkGreen' },
  { symbol: 'Lr', col: 3, row: 7, link: 'Lawrencium', color: 'blue' },
  { symbol: 'Rf', col: 4, row: 7, link: 'Rutherfordium', color: 'blue' },
  { symbol: 'Db', col: 5, row: 7, link: 'Dubnium', color: 'blue' },
  { symbol: 'Sg', col: 6, row: 7, link: 'Seaborgium', color: 'blue' },
  { symbol: 'Bh', col: 7, row: 7, link: 'Bohrium', color: 'blue' },
  { symbol: 'Hs', col: 8, row: 7, link: 'Hassium', color: 'blue' },
  { symbol: 'Mt', col: 9, row: 7, link: 'Meitnerium', color: 'blue' },
  { symbol: 'Ds', col: 10, row: 7, link: 'Darmstadtium', color: 'blue' },
  { symbol: 'Rg', col: 11, row: 7, link: 'Roentgenium', color: 'blue' },
  { symbol: 'Cn', col: 12, row: 7, link: 'Copernicium', color: 'blue' },
  { symbol: 'Nh', col: 13, row: 7, link: 'Nihonium', color: 'mauve' },
  { symbol: 'Fl', col: 14, row: 7, link: 'Flerovium', color: 'mauve' },
  { symbol: 'Mc', col: 15, row: 7, link: 'Moscovium', color: 'mauve' },
  { symbol: 'Lv', col: 16, row: 7, link: 'Livermorium', color: 'mauve' },
  { symbol: 'Ts', col: 17, row: 7, link: 'Tennessine', color: 'maroon' },
  { symbol: 'Og', col: 18, row: 7, link: 'Oganesson', color: 'yellow' },
];

document.addEventListener('DOMContentLoaded', () => {
  const periodicTable = document.querySelector('.periodicTable');

  elements.forEach((element) => {
    const thing = document.createElement('button');
    thing.className = element.symbol + ' ' + element.color;
    thing.id = 'button-' + element.symbol.toLowerCase();
    thing.textContent = element.symbol;
    thing.style.gridRow = element.row;
    thing.style.gridColumn = element.col;
    thing.onclick = () => {
      window.open(l + element.link, '_blank');
    };

    periodicTable.appendChild(thing);
  });
});
