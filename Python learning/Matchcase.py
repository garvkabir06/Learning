X = int(input("Enter the number: "))

# X is variable

match X:
    case 1:
        print("X is 1")

    case 2:
        print("X is 2")

    case 3:
        print("X is 3")

    case 90:
        print("X is 90")

    case 100:
        print("X is 100")

    case _:
        print("X is invalid")