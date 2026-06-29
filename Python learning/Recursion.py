# Recursion
x = int(input("Enter the value: "))
def fact(x):
    if x == 1:
        return 1
    return x*fact(x-1)
print(fact(x))
