import time

hour = int(time.strftime("%H"))

if hour < 12:
    print("Goodmorning")
elif hour < 18:
    print("Good Afternoon")
elif hour < 19:
    print("Good Evening")
else:
    print("Good Night")
