# OUR LIST
marks = [98, 97, 95, 97, 90, 95]
students = ["Garv", "Anaaya", "Aman", "Vivek", "Sneha", "Sahil"]
Age = [20, 21, 21, 19, 23, 21]

# CHECKING TYPE
print(type(marks))
print(type(students))
print(type(Age))

#INDEXING

print(students[2])
print(marks[3])
print(Age[4])

# CHECK WHEATHER AN ITEM PRESENT IN LIST OR NOT

if "Anaaya" in students:
    print("Anaaya is in the list")

else:
    print("False")

if "Ana" in "Anaaya":
    print("true")

# RANGE OF INDEX

print(students[0:2])
print(Age[0:4])
print(marks[0:2])
print(marks[:])
print(students[:2])
print(students[0:6:2])
