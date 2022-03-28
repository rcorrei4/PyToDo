from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions, mixins
from rest_framework.generics import CreateAPIView

from .models import Task, Tag
from .serializers import TaskSerializer, TagSerializer, UserSerializer

class UserCreateView(viewsets.ModelViewSet):
	queryset = get_user_model().objects
	serializer_class = UserSerializer

class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all().order_by('-id')
	serializer_class = TaskSerializer
	permission_classes = [permissions.IsAuthenticated]

	#Substituir o método get para pegar somente a tarefa do usuário logado
	def get_queryset(self):
		user = self.request.user
		return Task.objects.filter(user=user)

	#Criar task e adicionar usuário logado como autor
	def perform_create(self, serializer):
		return serializer.save(user=self.request.user)

class TagViewSet(viewsets.ModelViewSet):
	queryset = Tag.objects.all()
	serializer_class = TagSerializer
	permission_classes = [permissions.IsAuthenticated]

	#Substituir o método get para pegar somente a tag do usuário logado
	def get_queryset(self):
		user = self.request.user
		return Tag.objects.filter(user=user)

	#Criar tag e adicionar usuário logado como autor
	def perform_create(self, serializer):
		return serializer.save(user=self.request.user)