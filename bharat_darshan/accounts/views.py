from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, FileResponse
from django.conf import settings

from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth.tokens import default_token_generator

from django.core.mail import send_mail
from django.utils import timezone
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str

from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site

from pathlib import Path
from datetime import timedelta
import random

from django.contrib.auth.decorators import login_required
from django.shortcuts import render


#signup view
def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")

        if User.objects.filter(username=username).exists():
            return HttpResponse("Username already exists")

        if User.objects.filter(email=email).exists():
            return HttpResponse("Email already registered")

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        user.is_active = False
        user.save()

        current_site = get_current_site(request)
        subject = "Activate your Bharat Darshan account"

        message = render_to_string("html/verify_email.html", {
            "user": user,
            "domain": current_site.domain,
            "uid": urlsafe_base64_encode(force_bytes(user.pk)),
            "token": default_token_generator.make_token(user),
        })

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )

        return HttpResponse("Check your email to verify your account")

    return render(request, "html/signup.html")


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect("login")

    return HttpResponse("Activation link is invalid or expired.")


#login view

def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user_obj = User.objects.get(email=email)
            username = user_obj.username
        except User.DoesNotExist:
            return HttpResponse("Invalid credentials")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_active:
                auth_login(request, user)
                return redirect("atlas")
            else:
                return HttpResponse("Please verify your email first")
        else:
            return HttpResponse("Invalid credentials")

    return render(request, "html/login.html")


#logout view
def logout_view(request):
    auth_logout(request)
    return redirect("home")


def home(request):
    return render(request, "html/atlas.html")



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

@login_required(login_url='login')
def gauda(request):
    return render(request, 'html/gauda.html')


@login_required(login_url='login')
def gupta(request):
    return render(request, 'html/gupta.html')


@login_required(login_url='login')
def gurjara_pratihara(request):
    return render(request, 'html/gurjara-pratihara.html')


@login_required(login_url='login')
def harsha(request):
    return render(request, 'html/harsha.html')



@login_required(login_url='login')
def huna(request):
    return render(request, 'html/huna.html')


@login_required(login_url='login')
def indo_greek(request):
    return render(request, 'html/indo-greek.html')



@login_required(login_url='login')
def indo_parthians(request):
    return render(request, 'html/indo-parthians.html')


@login_required(login_url='login')
def kanva(request):
    return render(request, 'html/kanva.html')


@login_required(login_url='login')
def kushana(request):
    return render(request, 'html/kushana.html')


@login_required(login_url='login')
def maitraka(request):
    return render(request, 'html/maitraka.html')


@login_required(login_url='login')
def maurya(request):
    return render(request, 'html/mauryan.html')


@login_required(login_url='login')
def mukharis(request):
    return render(request, 'html/mukharis.html')



@login_required(login_url='login')
def nanda(request):
    return render(request, 'html/nanda.html')



@login_required(login_url='login')
def pala(request):
    return render(request, 'html/pala.html')


@login_required(login_url='login')
def saka(request):
    return render(request, 'html/saka.html')


@login_required(login_url='login')
def satvahana(request):
    return render(request, 'html/satvahana.html')

@login_required(login_url='login')
def shunga(request):
    return render(request, 'html/shunga.html')

@login_required(login_url='login')
def southern_kingdoms(request):
    return render(request, 'html/southern-kingdoms.html')

@login_required(login_url='login')
def vakataka(request):
    return render(request, 'html/vakataka.html') 

@login_required(login_url='login')
def western_kshatrapas(request):
    return render(request, 'html/western-kshatrapas.html')


#Medival Dynasties

@login_required(login_url='login')
def rashtrakuta(request):          
    return render(request, 'html/rashtrakuta.html')

@login_required(login_url='login')
def gurjara(request):                  
    return render(request, 'html/gurjara.html')

@login_required(login_url='login')
def chola(request):                  
    return render(request, 'html/chola.html')

@login_required(login_url='login')
def chandelachauhan(request):         
    return render(request, 'html/chandelachauhan.html')


@login_required(login_url='login')
def chola(request):
    return render(request, 'html/chola.html')


@login_required(login_url='login')    
def delhi(request):
    return render(request, 'html/delhi.html')

 
@login_required(login_url='login')   
def rajput(request):
    return render(request, 'html/rajput.html')

    
@login_required(login_url='login')
def mewar(request):
    return render(request, 'html/mewar.html')

 
@login_required(login_url='login')   
def kakatiya_hoysala(request):
    return render(request, 'html/kakatiya-hoysala.html')


@login_required(login_url='login')    
def vijaynagar(request):               
    return render(request, 'html/vijaynagar.html')


@login_required(login_url='login')   
def bahmani(request):                  
    return render(request, 'html/bahmani.html')


@login_required(login_url='login')
def endofmedival(request):             
    return render(request, 'html/endofmedival.html')


@login_required(login_url='login')
def mahmud_of_gazhni(request):             
    return render(request, 'html/mahmud-of-gazhni.html')


@login_required(login_url='login')
def ghurid_dynasty(request):
    return render(request, 'html/ghurid-dynasty.html')


@login_required(login_url='login')
def khilji(request):                  
    return render(request, 'html/khilji.html')


@login_required(login_url='login')
def tughlaq(request):             
    return render(request, 'html/tughlaq.html')


@login_required(login_url='login')
def sayyid(request):             
    return render(request, 'html/sayyid.html')


@login_required(login_url='login')
def lodi(request):
    return render(request, 'html/lodi.html')


@login_required(login_url='login')
def bijapur(request):
    return render(request, 'html/bijapur.html')


@login_required(login_url='login')
def barid_shahid_of_bidar(request):
    return render(request, 'html/barid-shahid-of-bidar.html') 


@login_required(login_url='login')    
def nizam_shahi_of_ahmadnagar(request):
    return render(request, 'html/nizam-shahi-of-ahmadnagar.html')


@login_required(login_url='login')
def qutb_shahi_of_golconda(request):                  
    return render(request, 'html/qutb-shahi-of-golconda.html')


@login_required(login_url='login')
def mughal(request):             
    return render(request, 'html/mughal.html')


@login_required(login_url='login')
def shershah(request):             
    return render(request, 'html/shershah.html')


@login_required(login_url='login')
def talikota(request):
    return render(request, 'html/talikota.html')


@login_required(login_url='login')
def marathas(request):
    return render(request, 'html/marathas.html')


@login_required(login_url='login')
def bhakti(request):
    return render(request, 'html/bhakti.html') 


@login_required(login_url='login')    
def sikh(request):
    return render(request, 'html/sikh.html')




 # modern dynasties
@login_required(login_url='login') 
def portugese(request):               
    return render(request, 'html/portugese.html')
@login_required(login_url='login') 
def dutch(request):                     
    return render(request, 'html/dutch.html')
@login_required(login_url='login') 
def danes(request):                     
    return render(request, 'html/danes.html')
@login_required(login_url='login') 
def french(request):                    
    return render(request, 'html/french.html')
@login_required(login_url='login') 
def anglo_french(request):              
    return render(request, 'html/anglo-french.html')
@login_required(login_url='login') 
def plassey(request):                  
    return render(request, 'html/plassey.html')
@login_required(login_url='login') 
def buxar(request):                     
    return render(request, 'html/buxar.html')
@login_required(login_url='login') 
def british_expansion(request):         
    return render(request, 'html/british-expansion.html')
@login_required(login_url='login') 
def mughal_decline(request):            
    return render(request, 'html/mughal-decline.html')
@login_required(login_url='login') 
def revolt_1857(request):               
    return render(request, 'html/revolt-1857.html')
@login_required(login_url='login') 
def social_relegious_movement(request): 
    return render(request, 'html/social-religious-movement.html')
@login_required(login_url='login') 
def indian_nc(request):                 
    return render(request, 'html/indian-nc.html')
@login_required(login_url='login') 
def bengal_swadeshi(request):          
    return render(request, 'html/bengal-swadeshi.html')
@login_required(login_url='login') 
def home_rule(request):                
    return render(request, 'html/home-rule.html')
@login_required(login_url='login') 
def jallianwala_bagh(request):           
    return render(request, 'html/jallianwala-bagh.html')
@login_required(login_url='login') 
def non_cooperation(request):
    return render(request, 'html/non-cooperation.html')
@login_required(login_url='login') 
def plassey(request):
    return render(request, 'html/plassey.html')
@login_required(login_url='login') 
def portugese(request):
    return render(request, 'html/portugese.html')
@login_required(login_url='login') 
def quit_india_movement(request):
    return render(request, 'html/quit-india-movement.html')
@login_required(login_url='login') 
def india_independence(request):         
    return render(request, 'html/india-independence.html')
@login_required(login_url='login') 
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





def battles(request):
    return render(
        request,
        "html/battles.html",
        {
            "is_authenticated": request.user.is_authenticated
        }
    )


#maps
#ANCIENT MAPS
def nanda_map(request):
    return render(request, 'Maps/nanda-map.html')
def mauryan_map(request):
    return render(request, 'Maps/mauryan-map.html')
def shunga_map(request):
    return render(request, 'Maps/shunga-map.html')
def kanva_map(request):
    return render(request, 'Maps/kanva-map.html')
def saka_map(request):
    return render(request, 'Maps/saka-map.html')
def indo_greek_map(request):
    return render(request, 'Maps/indo-greek-map.html')
def satvahana_map(request):
    return render(request, 'Maps/satvahana-map.html')
def indo_parthians_map(request):
    return render(request, 'Maps/indo-parthians-map.html')  
def kushana_map(request):
    return render(request, 'Maps/kushana-map.html')
def western_kshatrapas_map(request):
    return render(request, 'Maps/western-kshatrapas-map.html')
def mukharis_map(request):
    return render(request, 'Maps/mukharis-map.html')
def gupta_map(request):
    return render(request, 'Maps/gupta-map.html')
def huna_map(request):
    return render(request, 'Maps/huna-map.html')
def vakataka_map(request):
    return render(request, 'Maps/vakataka-map.html')
def harsha_map(request):
    return render(request, 'Maps/harsha-map.html')
def gauda_map(request):
    return render(request, 'Maps/gauda-map.html')
def maitraka_map(request):
    return render(request, 'Maps/maitraka-map.html')
def gurjara_pratihara_map(request):
    return render(request, 'Maps/gurjara-pratihara-map.html')
def pala_map(request):
    return render(request, 'Maps/pala-map.html')
def southern_kingdoms_map(request):
    return render(request, 'Maps/southern-kingdoms-map.html')


#medival map
def gurjara_map(request):
    return render(request, 'Maps/gurjara-map.html')
def pala_map(request):
    return render(request, 'Maps/pala-map.html')
def rashtrakuta_map(request):
    return render(request, 'Maps/rashtrakuta-map.html')
def chola_map(request):
    return render(request, 'Maps/chola-map.html')
def chandelachauhan_map(request):
    return render(request, 'Maps/chandelachauhan-map.html')
def rajput_map(request):
    return render(request, 'Maps/rajput-map.html')
def delhi_map(request):
    return render(request, 'Maps/delhi-map.html')
def mewar_map(request):
    return render(request, 'Maps/mewar-map.html')
def vijaynagar_map(request):
    return render(request, 'Maps/vijaynagar-map.html')
def bahmani_map(request):
    return render(request, 'Maps/bahmani-map.html')
def kakatiya_hoysala_map(request):
    return render(request, 'Maps/kakatiya-hoysala-map.html')
def endofmedival_map(request):
    return render(request, 'Maps/endofmedival-map.html')
def mahmud_of_gazhni_map(request):
    return render(request, 'Maps/mahmud-of-gazhni-map.html')
def ghurid_dynasty_map(request):
    return render(request, 'Maps/ghurid-dynasty-map.html')
def khilji_map(request):
    return render(request, 'Maps/khilji-map.html')
def tughlaq_map(request):
    return render(request, 'Maps/tughlaq-map.html')
def sayyid_map(request):
    return render(request, 'Maps/sayyid-map.html')
def lodi_map(request):
    return render(request, 'Maps/lodi-map.html')
def bijapur_map(request):
    return render(request, 'Maps/bijapur-map.html')
def barid_shahid_of_bidar_map(request):
   return render(request, 'Maps/barid-shahid-of-bidar-map.html')
def nizam_shahi_of_ahmadnagar_map(request):
    return render(request, 'Maps/nizam-shahi-of-ahmadnagar-map.html')
def qutb_shahi_of_golconda_map(request):
    return render(request, 'Maps/qutb-shahi-of-golconda-map.html')
def mughal_map(request):
    return render(request, 'Maps/mughal-map.html')
def shershah_map(request):
    return render(request, 'Maps/shershah-map.html')
def talikota_map(request):
    return render(request, 'Maps/talikota-map.html')
def marathas_map(request):
    return render(request, 'Maps/marathas-map.html')
def bhakti_map(request):
    return render(request, 'Maps/bhakti-map.html')
def sikh_map(request):
    return render(request, 'Maps/sikh-map.html')

    
# Modern Maps
