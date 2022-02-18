from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.fields import CurrentUserDefault

from .models import Task, Tag

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ['username', 'email', 'password']
		extra_kwargs = {'password': {'write_only': True}}

	def create(self, validated_data):
		password = validated_data.pop('password')
		user = User(**validated_data)
		user.set_password(password)
		user.save()
		token = Token.objects.create(user=user)
		return user

class TaskSerializer(serializers.HyperlinkedModelSerializer):
	user = serializers.PrimaryKeyRelatedField(read_only=True)

	class Meta:
		model = Task
		fields = '__all__'
		
		extra_kwargs = {
			'tags': {'required': False},
		}


class TagSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Tag
		fields = '__all__'