from rest_framework.fields import CurrentUserDefault
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Task, Tag

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = get_user_model()
		fields = ['email', 'username', 'password']

	def create(self, validated_data):
		user = get_user_model().objects.create_user(**validated_data)
		return user

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = '__all__'
		
		extra_kwargs = {
			'tags': {'required': False},
		}
		
class TagSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tag
		fields = '__all__'