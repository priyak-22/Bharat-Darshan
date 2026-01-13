from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login , logout
from django.shortcuts import render



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
    return redirect('login')

def home(request):
    return render(request, "html/atlas.html")
def signup(request):
    return render(request, "html/signup.html")

def atlas(request):
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
    return render(request, 'html/cultural.html')

def freedom_movement(request):
    return render(request, 'html/freedom.html')

# Ancient Dynasties
def gauda(request):
    return render(request, 'html/Gauda.html')
def gupta(request):
    return render(request, 'html/gupta.html')
def  gurjara_pratihara(request):
    return render(request, 'html/gurjara-pratihara.html')
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
def satvahana(request):
    return render(request, 'html/satvahana.html')
def shunga(request):
    return render(request, 'html/shunga.html')
def southern_kingdoms(request):
    return render(request, 'html/southern-kingdoms.html')
def vakataka(request):
    return render(request, 'html/vakataka.html')  
def western_kshatrapas(request):
    return render(request, 'html/western-kshatrapas.html')


#Medival Dynasties
def pala(request):                     
    return render(request, 'html/pala.html')

def rashtrakuta(request):          
    return render(request, 'html/rashtrakuta.html')

def gurjara(request):                  
    return render(request, 'html/gurjara.html')

def chola(request):                  
    return render(request, 'html/chola.html')

def chandelachauhan(request):         
    return render(request, 'html/chandelachauhan.html')
def chola(request):
    return render(request, 'html/chola.html')
def delhi(request):
    return render(request, 'html/delhi.html')
def rajput(request):
    return render(request, 'html/rajput.html')
def mewar(request):
    return render(request, 'html/mewar.html')
def kakatiya_hoysala(request):
    return render(request, 'html/kakatiya-hoysala.html')
def vijaynagar(request):               
    return render(request, 'html/vijaynagar.html')
def bahmani(request):                  
    return render(request, 'html/bahmani.html')
def endofmedival(request):             
    return render(request, 'html/endofmedival.html')
def mahmud_of_gazhni(request):             
    return render(request, 'html/mahmud-of-gazhni.html')
def ghurid_dynasty(request):
    return render(request, 'html/ghurid-dynasty.html')
def khilji(request):                  
    return render(request, 'html/khilji.html')
def tughlaq(request):             
    return render(request, 'html/tughlaq.html')
def sayyid(request):             
    return render(request, 'html/sayyid.html')
def lodi(request):
    return render(request, 'html/lodi.html')
def bijapur(request):
    return render(request, 'html/bijapur.html')
def barid_shahid_of_bidar(request):
    return render(request, 'html/barid-shahid-of-bidar.html')     
def nizam_shahi_of_ahmadnagar(request):
    return render(request, 'html/nizam-shahi-of-ahmadnagar.html')
def qutb_shahi_of_golconda(request):                  
    return render(request, 'html/qutb-shahi-of-golconda.html')
def mughal(request):             
    return render(request, 'html/mughal.html')
def shershah(request):             
    return render(request, 'html/shershah.html')
def talikota(request):
    return render(request, 'html/talikota.html')
def marathas(request):
    return render(request, 'html/marathas.html')
def bhakti(request):
    return render(request, 'html/bhakti.html')     
def sikh(request):
    return render(request, 'html/sikh.html')



 # modern dynasties
def portugese(request):               
    return render(request, 'html/portugese.html')

def dutch(request):                     
    return render(request, 'html/dutch.html')

def danes(request):                     
    return render(request, 'html/danes.html')

def french(request):                    
    return render(request, 'html/french.html')

def anglo_french(request):              
    return render(request, 'html/anglo-french.html')

def plassey(request):                  
    return render(request, 'html/plassey.html')

def buxar(request):                     
    return render(request, 'html/buxar.html')

def british_expansion(request):         
    return render(request, 'html/british-expansion.html')

def mughal_decline(request):            
    return render(request, 'html/mughal-decline.html')

def revolt_1857(request):               
    return render(request, 'html/revolt-1857.html')

def social_relegious_movement(request): 
    return render(request, 'html/social-religious-movement.html')

def indian_nc(request):                 
    return render(request, 'html/indian-nc.html')

def bengal_swadeshi(request):          
    return render(request, 'html/bengal-swadeshi.html')

def home_rule(request):                
    return render(request, 'html/home-rule.html')

def jallianwala_bagh(request):           
    return render(request, 'html/jallianwala-bagh.html')

def non_cooperation(request):
    return render(request, 'html/non-cooperation.html')
def plassey(request):
    return render(request, 'html/plassey.html')
def portugese(request):
    return render(request, 'html/portugese.html')
def quit_india_movement(request):
    return render(request, 'html/quit-india-movement.html')

def india_independence(request):         
    return render(request, 'html/india-independence.html')
def civil_disobidience(request):        
    return render(request, 'html/civil-disobidience.html')


# Timeline
def ancient_timeline(request):
    return render(request, 'html/ancient-timeline.html')
def medival_timeline(request):
    return render(request, 'html/medival-timeline.html')
def modern_timeline(request):
    return render(request, 'html/modern-timeline.html')

    # culture
def ancient_culture(request):
    return render(request, 'html/ancient-culture.html')
def medival_culture(request):
    return render(request, 'html/medival-culture.html')
def modern_culture(request):
    return render(request, 'html/modern-culture.html')