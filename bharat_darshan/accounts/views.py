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
            return render(request, "html/login.html", {
                "error": "Invalid username or password"
            })

    return render(request, "html/login.html")

def logout_view(request):
    logout(request)
    return redirect('html/login')

def home(request):
    return render(request, "html/atlas.html")

def main(request):
    return render(request, "html/main.html")

def about(request):
    return render(request, "about.html")

def map_page(request):
    return render(request, "map.html")

def ancient(request):
    return render(request, "html/AncientIndia.html")

def medieval(request):
    return render(request, 'html/MedievalIndia.html')

def modern(request):
    return render(request, 'html/ModernIndia.html')

def empires(request):
    return render(request, 'html/empires.html')

def battles(request):
    return render(request, 'html/battles.html')

def cultural_heritage(request):
    return render(request, 'html/cultural_heritage.html')

def freedom_movement(request):
    return render(request, 'html/freedom.html')

# Ancient Dynasties
def gauda(request):
    return render(request, 'html/Gauda.html')
def gupta(request):
    return render(request, 'html/gupta.html')
def  gurjara_pratihara(request):
    return render(request, 'html/gujara-pratihara.html')
def harsha(request):
    return render(request, 'html/harsha.html')
def huna(request):
    return render(request, 'html/huna.html')
def indo_greek(request):
    return render(request, 'html/indo-greek.html')
def indo_parthian(request):
    return render(request, 'html/indo-parthians.html')
def kanva(request):
    return render(request, 'html/kanva.html')
def kushana(request):
    return render(request, 'html/kushana.html')
def maitraka(request):
    return render(request, 'html/maitraka.html')
def maurya(request):
    return render(request, 'html/mauryan.html')
def mukharis(request):
    return render(request, 'html/mukharis.html')
def nanda(request):
    return render(request, 'html/nanda.html')
def pala(request):
    return render(request, 'html/pala.html')
def saka(request):
    return render(request, 'html/saka.html')
def sathavahana(request):
    return render(request, 'html/satavahana.html')
def shunga(request):
    return render(request, 'html/shunga.html')
def southern_kingdoms(request):
    return render(request, 'html/southern-kingdoms.html')
def vakataka(request):
    return render(request, 'html/vakataka.html')  
def western_kshatrapas(request):
    return render(request, 'html/western-kshatrapas.html')


