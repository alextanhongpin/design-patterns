# a special case of builder pattern
# in which the build process is chained
# Pattern Name: Fluent Builder


class Pizza:
    def __init__(self, builder):
        self.garlic = builder.garlic
        self.extra_cheese = builder.extra_cheese
    
    def __str__(self):
        garlic = 'yes' if self.garlic else 'no'
        cheese = 'yes' if self.extra_cheese else 'no'
        info = ('Garlic: {}'.format(garlic), 
                'Extra cheese: {}'.format(cheese))
        return '\n'.join(info)
    
    class PizzaBuilder:
        def __init__(self):
            self.extra_chesse = False
            self.garlic = False
        
        def add_garlic(self):
            self.garlic = True
            return self
        
        def add_extra_cheese(self):
            self.extra_cheese = True
            return self
        
        def build(self):
            return Pizza(self)
    
if __name__ == '__main__':
    pizza = Pizza.PizzaBuilder().add_garlic().add_extra_cheese().build()
    print pizza