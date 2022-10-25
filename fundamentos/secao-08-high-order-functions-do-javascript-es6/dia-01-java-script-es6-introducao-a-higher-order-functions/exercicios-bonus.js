const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const damageDragon = () => {
  const maximumDamage = dragon.strength;
  return getRndInteger(15, maximumDamage);
}

const damageWarrior = () => {
  const minimumDamage = warrior.strength;
  const maximumDamage = warrior.strength * warrior.weaponDmg;
  return getRndInteger(minimumDamage, maximumDamage);
}

const damageMage = () => {
  if (mage.mana < 15) {
    return { dano : 'Não possui mana suficiente', manaGasta : 0}
  }
  const minimumDamage = mage.intelligence;
  const maximumDamage = mage.intelligence * 2;
  const damage = getRndInteger(minimumDamage, maximumDamage);
  const mana = 15;
  return { dano : damage, manaGasta : mana}
}

const gameActions = {
  turnOfWarrior : (func) => {
    warrior.damage = func();
    dragon.healthPoints -= warrior.damage;
  },
  turnOfMage : (func) => {
    mage.damage = func().dano;
    mage.mana -= func().manaGasta;
    dragon.healthPoints -= mage.damage;
  },
  turnOfDragon : (func) => {
    dragon.damage = func();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  result : () => {
    gameActions.turnOfDragon(damageDragon);
    gameActions.turnOfMage(damageMage);
    gameActions.turnOfWarrior(damageWarrior);
    return battleMembers;
  }
};

console.log(gameActions.result())

