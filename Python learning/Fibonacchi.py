# Fibonaachi is a number sequence where every number is a sequence of a two number before it
# Example 0,1,1,2,3,5,8,12

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1)+fib(n-2)
print(fib(50))

 
