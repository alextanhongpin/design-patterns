class LazyProperty:
    def __init__(self, method):
        self.method = method
        self.method_name = method.__name__
        print('function overriden: {}'.format(self.fget))
        print('function \'s name: {}'.format(self.func_name))

    def __get__(self, obj, cls):
        if not obj:
            return None
        value = self.method(obj)
        print('value {}'.format(value))
        setattr(obj, self.method_name, value)
        return value

class Test:
    def __init__(self):
        self.x = 'foo'
        self.y = 'bar'
        self._resource = None

    @LazyProperty
    def resource(self):
        print('initializing self._resource which is {}'.format(self._resource))
        self._resource = tuple(range(5)) # expensive
        return self._resource

def main():
    t = Test()
    print(t.x)
    print(t.y)
    print(t.resource)

if __name__ == '__main__':
    main()