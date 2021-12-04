// Pattern creation
/** Creation of main Component (abstract) */
class Beverage {
  /** This abstract component contains name and price */
  name = ''
  price = 0

  /** Constructor set name and price */
  constructor(name, price) { 
    this.name = name
    this.price = price
  }

  /** Simply return the description */
  getDescription = () => {
    return this.name
  }

  /** Simply return the price */
  getCost = () => {
    return this.price
  }
}

/** Create an Espresso class that IS A Beverage, so all props and methods are inherited */
class Espresso extends Beverage {
  /** Create a constructor without param that call the constructor of Beverage with static values */
  constructor() { 
    super('Espresso', 1)
  }
}

/** Create a Decaf class that IS A Beverage, so all props and methods are inherited */
class Decaf extends Beverage {
  /** Create a constructor without param that call the constructor of Beverage with static values */
  constructor() { 
    super('Decaf', 2)
  }
}

/** Create of main Decorator (abstract) that IS A Beverage */
class ExtraDecoration extends Beverage {
  /** Decoration HAS A beverage */
  beverage = null

  /** General constructor using Beverage constructor and setting beverage  */
  constructor(name, price, beverage) { 
    super(name, price)
    this.beverage = beverage
  }

  /** Overwrite getDescription because a Decorator need to return the new value function of his Beverage */
  getDescription = () => {
    return this.beverage.getDescription() + ' with ' + this.name 
  }

  /** Overwrite getCost because a Decorator need to return the new value function of his Beverage */
  getCost = () => {
    return this.beverage.getCost() + this.price
  }
}

/** Create a Milk Decorator who extends ExtraDecoration */
class Milk extends ExtraDecoration {
  /** Create a constructor only with Beverage param, and call the constructor of ExtraDecoration with static values */
  constructor(beverage) {
    super('Milk', 2, beverage)
  }
}

/** Create a Milk Decorator who extends ExtraDecoration */
class Caramel extends ExtraDecoration {
  /** Create a constructor only with Beverage param, and call the constructor of ExtraDecoration with static values */
  constructor(beverage) {
    super('Caramel', 3, beverage)
  }
}

// Pattern use
/** Create an Espresso Beverage with a Caramel Extra */
const caramelEspresso = new Caramel(new Espresso())
console.log(caramelEspresso.getDescription())
console.log(caramelEspresso.getCost())

/** Create a Decaf Beverage with Caramel and Milk Extras */
const caramelMilkDecaf = new Caramel(new Milk(new Decaf()))
console.log(caramelMilkDecaf.getDescription())
console.log(caramelMilkDecaf.getCost())