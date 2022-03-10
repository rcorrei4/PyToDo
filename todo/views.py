from django.shortcuts import render, redirect

def index(request):
	if request.user.is_authenticated:
		pass
	else:
		return redirect('login')

def login(request):
	return render(request, 'login.html')

def register(request):
	return render(request, 'register.html')