# while loop

count = 5
while (count > 0):    
    print(count)
    count = count + 1

# while loops with else

count = 10
while count > 0:
    print(count)
    count = count - 1
else:
    print("Invalid syntax")

# imaulating Do-While loop

while True:
    X = int(input("Enter the number: "))
    print(X + 2)
    if not X > 0:
        break

#Break and continue statement

i = int(input("enter the number"))

for garv in range (1,10):
    if garv == 0:
       print(garv)
       break

