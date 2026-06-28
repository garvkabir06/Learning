# Common way of formatting string
str = "Hey my name is {0} and i wanna be a {1}"
Name = "Garv Kabir"
Job = "AI Engineer"

print(str.format(Name, Job))

# Using f-string
x = "f-string"
y = "Garv"
print(f"Hey, I am {y} and i am learning to use {x}")

# If i wanna show what is data as a variable we can show it with curly braces
print(f"Hey, My name is {{Name}} and i wanna be a {{Job}}")
