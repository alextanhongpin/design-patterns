

class Synthetizer:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return 'the {} synthetizer'.format(self.name)
    
    def play(self):
        return 'is playing an electronic song'

class Human:
    def __init__(self, name):
        self.name = name
        
    def __str__(self):
        return '{} the human'.format(self.name)
    
    def speak(self):
        return 'says hello'

