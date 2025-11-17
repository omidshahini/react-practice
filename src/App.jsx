
const items = [
  { id : 0,
    name : 'Americano',
    ingredients : 'Espresso, Hot Water',
    price : 10,
    src : 'images/americano.jpg'
  },

  { id : 1,
    name : 'Espresso',
    ingredients : 'Pure Espresso',
    price : 8,
    src : 'images/espresso.jpeg'
  },

  { id : 2,
    name : 'Cappuccino',
    ingredients : 'Espresso, Hot Water, Sugar, Milk',
    price : 15,
    src : 'images/cappuccino.jpeg'
  },

  { id : 3,
    name : 'Latte',
    ingredients : 'Espresso, Milk',
    price : 12,
    src : 'images/latte.jpeg'
  },

  { id : 4,
    name : 'Cortado',
    ingredients : 'Espresso, Chocolatte',
    price : 11,
    src : 'images/cortado.jpeg'
  },

  { id : 5,
    name : 'Flat White',
    ingredients : 'Espresso, Creme',
    price : 10,
    src : 'images/flat white.jpeg'
  },

  { id : 6,
    name : 'Mocha',
    ingredients : 'Green Tea, Hot Water',
    price : 16,
    src : 'images/mocha.jpeg'
  },

  { id : 7,
    name : 'Cold Brew',
    ingredients : 'Espresso, Ice, Water',
    price : 9,
    src : 'images/cold brew.jpeg'
  },
]



const Menu = () => {
  return (
    <div>
    {items.map((item, id) => (
      <div key={id} className="flex flex-col">
        <img src={item.src} alt={item.name} style={{ width: '25%' }}/>
        <h2>{item.name}</h2>
        <p>{item.ingredients}</p>
        <p><strong>{item.price}$</strong></p>
      </div>
    ))}
    </div>
  )
}
export default Menu;