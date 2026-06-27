Title = "Welcome to kaun banega crorepati"
print(Title.center(80,"*"))

Amitabh = "Pehla Sawaal Aapki TV screen par\n1. What is the capital of india"
print(Amitabh)
q1 = ("A Agra", "B Mumbai", "C New Delhi", "D Bengaluru", "C")
print(q1[0:4])
player = input("Enter your answer: ").upper().strip()

if player == q1[4]:
    print("Sahi jawab")
else:
    print("Galat Jawab, Better luck next time")

Amitabh = "Dusra Sawaal Aapki TV screen par\n2. What is the scientific name of human"
print(Amitabh)

q2 = ("A Homo sapiens", "B Homo", "C Hominide", "D Animals", "A")
print(q2[0:4])
player = input("Enter your answer: ").upper().strip()

if player == q2[4]:
    print("Sahi jawab")
else:
    print("Galat Jawab, Better luck next time")

Amitabh = "Teesra Sawaal Aapki TV screen par\n3. Who is the CEO of google"
print(Amitabh)

q3 = ("A Satya Nadella", "B Sundar Pichai", "C steve jobs", "D Elon Musk", "B")
print(q3[0:4])
player = input("Enter your answer: ").upper().strip()

if player == q3[4]:
    print("Sahi jawab")
else:
    print("Galat Jawab, Better luck next time")

Amitabh = "Chautha Sawaal Aapki TV screen par\n4. Richest person Alive"
print(Amitabh)

q4 = ("A Bill gates", "B Warren Buffet", "C Mark Zuckerberg", "D Elon Musk", "D")
print(q4[0:4])
player = input("Enter your answer: ").upper().strip()

if player == q4[4]:
    print("Sahi jawab")
else:
    print("GAME OVER")



    