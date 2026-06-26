title = "*** SMART CALCULATOR ***"
print(title.center(25))

while True:
   num1 = int(input("Enter the First number: "))
   num2 = int(input("Enter the second number: "))
   op = input("enter the operator: ")
 
   if op == "+":
      print(op, "of", num1, "and", num2, "is", num1 + num2)

   elif op == "-":
      print(op, "of", num1, "and", num2, "is", num1 - num2)

   elif op == "*":
      print(op, "of", num1, "and", num2, "is", num1 * num2)

   elif op == "//":
      if num2 == 0:
         print("Division by zero isn't possible")
      else:
         print(op, "of", num1, "and", num2, "is", num1 // num2)

   elif op == "/":
      if num2 == 0:
        print("Division by zero isn't possible")
      else:
        print(op, "of", num1, "and", num2, "is", num1 / num2)
   elif op == "**":
      print(op, "of", num1, "and", num2, "is", num1 ** num2)

   elif op == "%":
      if num2 == 0:
        print("Division by zero isn't possible")
      else:
        print(op, "of", num1, "and", num2, "is", num1 % num2)

   else:
      print("invalid operator")

   again = input("Do you want to input again yes/no: ")
   if again == "no":
    print("Thankyou for using calculator")
    break
