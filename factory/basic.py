# factory pattern

# execute a single function, passing in a parameter 
# that provides information about what we want
# we are not required to know any details about how
# the object is implemented and where it is coming from


class A(object):
    pass
    
if __name__ == '__main__':
    a = A()
    b = A()
    
    print(id(a) == id(b))
    print(a, b)