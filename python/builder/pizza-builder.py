# step by step procedure on how to make (build) a pizza

from enum import Enum
import time

PizzaProgress = Enum('queued', 'preparation','baking','ready')
PizzaSauce = Enum('tomato', 'creme_fraiche')
PizzaDough = Enum('thin', 'thick')
PizzaTopping = Enum('mozarella', 'double_mozarella','bacon','ham','mushrooms','red_onion','oregano')
STEP_DELAY = 3 # in seconds for the sake of the example

print PizzaProgress.queued
class Pizza:
    def __init__(self, name):
        self.name = name
        self.dough = None
        self.sauce = None
        self.topping = []
    
    def __str__(self):
        return self.name
    
    def prepare_dough(self, dough):
        self.dough = dough
        print('preparing the {} dough of your {}...'.format(self.name, self))
        time.sleep(STEP_DELAY)
        print('done with the {} dough'.format(self.name))
    
class MargaritaBuilder:
    def __init__(self):
        self.pizza = Pizza('margarita')
        self.progress = PizzaProgress.queued
        self.baking_time = 5 # in seconds for the sake of the example
    
    def prepare_dough(self):
        self.progress = PizzaProgress.preparation
        self.pizza.prepare_dough(PizzaDough.thin)
    
    def add_sauce(self):
        print('adding the tomato sauce to your margarita...')
        self.pizza.sauce = PizzaSauce.tomato
        time.sleep(STEP_DELAY)
        print('done with the tomato sauce')
        
    def add_topping(self):
        print('adding the topping (double mozarella, oregano) to your margarita')
        self.pizza.topping.append([i for i in (PizzaTopping.double_mozarella, PizzaTopping.oregano)])
        time.sleep(STEP_DELAY)
        print('done with the topping (double mozarella, oregano)')
    
    def bake(self):
        self.progress = PizzaProgress.baking
        print('baking your margarita for {} seconds'.format(self.baking_time))
        time.sleep(self.baking_time)
        self.progress = PizzaProgress.ready
        print('your margarita is ready')
        
class CreamyBaconBuilder:
    def __init__(self):
        self.pizza = Pizza('creamy bacon')
        self.progress = PizzaProgress.queued
        self.baking_time = 7 # in seconds for the sake of example
    
    def prepare_dough(self):
        self.progress = PizzaProgress.preparation
        self.pizza.prepare_dough(PizzaDough.thick)
    
    def add_sauce(self):
        print('adding the creme fraiche sauce to your creamy bacon')
        self.pizza.sauce = PizzaSauce.creme_fraiche
        time.sleep(STEP_DELAY)
        print('done with the creme fraice sauce')
        
    def add_topping(self):
        print('adding the topping (mozarella, bacon, ham, mushrooms, red onion, oregano) to your creamy bacon')
        self.pizza.topping.append([t for t in (PizzaTopping.mozarella, PizzaTopping.bacon, 
        PizzaTopping.ham, PizzaTopping.mushrooms, PizzaTopping.red_onion, PizzaTopping.oregano)])
        time.sleep(STEP_DELAY)
        print('done with the topping (mozarella, bacon, ham, mushrooms, red onion, oregano)')
    
    def bake(self):
        self.progress = PizzaProgress.baking
        print('baking your creamy bacon for {} seconds'.format(self.baking_time))
        time.sleep(self.baking_time)
        self.progress = PizzaProgress.ready
        print('your creamy bacon is ready')
    
class Waiter:
    def __init__(self):
        self.builder = None
    
    def construct_pizza(self, builder):
        self.builder = builder
        [step() for step in (builder.prepare_dough, builder.add_sauce, builder.add_topping, builder.bake)]
    
    @property
    def pizza(self):
        return self.builder.pizza
    
def validate_style(builders):
    try: 
        pizza_style = input('What pizza would you like, [m]argarita or [c]reamy bacon?')
        builder = builders[pizza_style]()
        valid_input = True
    except KeyError as err:
        print('sorry, only margarita (key m) and creamy bacon (key c) are available')
        return (False, None)
    return (True, builder)
    
def main():
    builders = dict(m=MargaritaBuilder, c=CreamyBaconBuilder)
    valid_input = False
    while not valid_input:
        valid_input, builder = validate_style(builders)
    print()
    waiter = Waiter()
    waiter.construct_pizza(builder)
    pizza = waiter.pizza
    print()
    print('Enjoy your {}!'.format(pizza))
    
if __name__ == '__main__':
    main()