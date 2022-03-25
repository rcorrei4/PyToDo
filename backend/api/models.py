from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
	pass

class Task(models.Model):
	user = models.ForeignKey('User', on_delete=models.CASCADE)
	name = models.CharField(max_length=128)
	notes = models.CharField(max_length=512)
	tags = models.ManyToManyField("Tag", blank=True)
	date = models.DateField(auto_now_add=True)

	def __str__(self):
		return self.name

class Tag(models.Model):
	name = models.CharField(max_length=64)

	def __str__(self):
		return self.name