from rest_framework import serializers

from .models import Task, Tag

class TaskSerializer(serializers.HyperlinkedModelSerializer):
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