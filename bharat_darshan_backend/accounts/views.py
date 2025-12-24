from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login , logout
from django.shortcuts import render

def home(request):
    return render(request, "atlas.html")

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("login")  # change later
        else:
            return render(request, "login.html", {
                "error": "Invalid username or password"
            })

    return render(request, "login.html")
def logout_view(request):
    logout(request)
    return redirect('login')

def home(request):
    return render(request, "html/atlas.html")

def about(request):
    return render(request, "about.html")

def map_page(request):
    return render(request, "map.html")