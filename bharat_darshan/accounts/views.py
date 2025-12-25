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
    return render(request, 'dynasties/Ancient_history/Gauda.html')
def gupta(request):
    return render(request, 'dynasties/Ancient_history/gupta.html')
def  gurjara_pratihara(request):
    return render(request, 'dynasties/Ancient_history/gujara-pratihara.html')
def harsha(request):
    return render(request, 'dynasties/Ancient_history/harsha.html')
def huna(request):
    return render(request, 'dynasties/Ancient_history/huna.html')
def indo_greek(request):
    return render(request, 'dynasties/Ancient_history/indo-greek.html')
def indo_parthian(request):
    return render(request, 'dynasties/Ancient_history/indo-parthians.html')
def kanva(request):
    return render(request, 'dynasties/Ancient_history/kanva.html')
def kushana(request):
    return render(request, 'dynasties/Ancient_history/kushana.html')
def maitraka(request):
    return render(request, 'dynasties/Ancient_history/maitraka.html')
def maurya(request):
    return render(request, 'dynasties/Ancient_history/mauryan.html')
def mukharis(request):
    return render(request, 'dynasties/Ancient_history/mukharis.html')
def nanda(request):
    return render(request, 'dynasties/Ancient_history/nanda.html')
def pala(request):
    return render(request, 'dynasties/Ancient_history/pala.html')
def saka(request):
    return render(request, 'dynasties/Ancient_history/saka.html')
def sathavahana(request):
    return render(request, 'dynasties/Ancient_history/satavahana.html')
def shunga(request):
    return render(request, 'dynasties/Ancient_history/shunga.html')
def southern_kingdoms(request):
    return render(request, 'dynasties/Ancient_history/southern-kingdoms.html')
def vakataka(request):
    return render(request, 'dynasties/Ancient_history/vakataka.html')  
def western_kshatrapas(request):
    return render(request, 'dynasties/Ancient_history/western-kshatrapas.html')

